# 第 7 章 迭代器

## 1、迭代器

### （1）可迭代对象的使用

可迭代对象有如下用途：

- `for of` 遍历
- `...`操作符展开为数组
- 对可迭代对象解构赋值

### （2）迭代原理

![image-20211028161307121](./img/image-20211028161307121.png)

`迭代结果对象`的`value`属性常常是我们真正需要的数据，前面提到的各种对可迭代对象的访问方式都隐式地执行了上面的流程。

值得注意的是，`迭代器对象`本身也是`可迭代对象`，具有`Symbol.iterator`属性，返回该迭代器对象本身。

如下：

```js
let list = [1, 2, 3, 4];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // 1
let tail = [...iter]; // [2,3,4]
```

### （3）实现可迭代对象类

> 当拿一个可迭代对象对执行迭代相关操作时，会自动通过它的`Symbol.iterator`方法获取到`迭代器对象`，通过`next`函数获取当前的状态，并递归的使用该迭代器对象（本质上也是可迭代对象）的`Symbol.iterator`方法获取下一个状态的迭代器对象。

实现可迭代 Range 类：

```js
class Range {
    constructor (from, to){
        this.from = from;
        this.to = to;
    }
    [Symbol.iterator](){
        let next = Math.ceil(this.from); 	// 起始值
        let last = this.to;		// 最大值
        return {
            next(){
                return (next<=last)? { value: next++ }: { done: true };
            },
            [Symbol.iterator]() { return this };
        }
    }
}
```

通过迭代器我们可以重写一些迭代方法。如 map()：

```js
fucntion map(iterable, f){
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator](){ return this },
        next(){
            let v = iterator.next();
            if(v.done)
                return v;
            else
                return { value: f(v.value) };       }
    }
}

[...map(new Range(1,4), x=>x*x)];	// [1,4,9,16]
```

> 非常巧妙。

## 2、生成器

### （1）介绍

生成器`Generator`本质上是一种函数，用来生成某种迭代规则的迭代器`Iterator`对象，可以看做一种描述迭代关系的语法糖。
```js
function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

let hw = helloWorldGenerator();
hw.next(); // 'hello'
```
Generator 函数是`协程`在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

### （2）在异步中使用

 异步的调用和流程管理是分离的：

通过给`next()`传参给上一个`yield`表达式赋值，所以本质上来说`generator`本身做不到对异步的监测和回调，它只支持线程的切换和异步的同步格式，最后还要配合着`Promise`实现真正的异步的。

```js
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next(); // {value: Promise}

result.value.then(function(data){
  g.next(data)
});
```

可以看到，虽然 Generator 函数将异步操作表示得很简洁，但是流程管理却不方便，我们需要手动管理，即手动去写执行器使用then层层添加回调结果。

而`async`和`await`正是`generator`加上流程控制的语法糖：

```js
// 接收生成器作为参数，建议先移到后面，看下生成器中的代码
var myAsync = (generator) => {
  // 注意 iterator.next() 返回对象的 value 是 promiseAjax()，一个 promise
  const iterator = generator();

  // handle 函数控制 async 函数的 挂起-执行
  const handle = (iteratorResult) => {
    if (iteratorResult.done) return;

    const iteratorValue = iteratorResult.value;

    // 只考虑异步请求返回值是 promise 的情况
    if (iteratorValue instanceof Promise) {
      // 递归调用 handle，promise 兑现后再调用 iterator.next() 使生成器继续执行
      // ps.原书then最后少了半个括号 ')'
      iteratorValue
        .then((result) => handle(iterator.next(result)))
        .catch((e) => iterator.throw(e));
    }
  };

  try {
    handle(iterator.next());
  } catch (e) {
    console.log(e);
  }
};

myAsync(function* () {
  try {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(a + 10);
    const c = yield Promise.resolve(b + 100);
    console.log(a, b, c); // 输出 1，11，111
  } catch (e) {
    console.log("出错了：", e);
  }
});
```



