# 第9章 异步编程

## 1、关于异步

究竟什么叫异步？我们常常能给出异步的场景，却很难给出确切的定义，我在这里勉强描述一番：**异步是一段不知何时执行结束的过程和为响应这段过程而定义的回调函数**。所以异步操作包括异步执行本身，和异步完成后的回调函数。譬如我们发出一个ajax数据请求，这个请求过程是异步的，同时我们还要预先定义好对请求结果的处理，这个处理也是异步的。

关于异步我们主要学习异步代码的写法，大概分为以下几类：

- 为事件源注册`事件处理程序`
  - `addEventListener`('事件'，处理函数)
  - 使用`on`形式
- `回调函数`API
- 基于`Promise`
- 使用`async`和`await`

以下围绕这几种形式介绍。

> 在不同环境下，以上各种方式并非总是可用的。

## 2、注册方式

### （1）浏览器环境

#### ① addEventListener

```js
let okay = document.querySelector('...');
okay.addEventListener('click', applyUpdata);
```

#### ② on事件属性

```js
let okay = document.querySelector('...');
okay.onclick = applyUpdata;
```

> 两种方式的效果是相同的，可见第二种方式更简单，但一种事件只能添加一个事件处理函数，而第一种可以添加多个。
>
> 这两种方式定义的回调函数中的this都是指向被绑定的对象，因为最后是其调用的这些函数。

### （2）Node环境

```js
const https = require("https");

function getText(url, callback){
    request = https.get(url);
    request.on("response", response => {
        ...
    })
    request.on("error", (err) => {
        ...
    })
}
```

> 这里的`on()`类似于上面的`addListener()`。

## 3、回调函数API方式

回调函数API方式是十分常用的方式，它是把回调函数直接作为参数传入到异步函数中，省却了手动注册处理函数的过程。但注意这种方式是官方针对常用异步函数提供的一套简洁的API，常常是针对那些只具有成功和失败事件的异步函数。

```js
const fs = require("fs");
fs.readFile("config.json", "utf-8", (err, text)=>{
    if(err){...}
    else()
})
```

> 事实上，在很长的一段时间这是异步函数最常用的写法。但也有如下十分明显的缺陷：

首先这种写法很容易写出回调地狱，即多级回调函数的嵌套，代码可读性很不好。再者这种写法很不利于异常捕获，因为回调函数中的异常是没法传播到操作发起者的，我们需要再每一级回调函数使用异常捕获，我常常不是我们希望的。于是`Promise`很好地解决了这两个问题。

## 4、Promise方式

> 关于期约，我们先来使用它，再考虑实现它。

### （1）使用Promise

期约表示在期约对象被创建之后发生的异步计算的未来结果。期约的生命周期从创建完成的待定（`pending`）状态到异步操作完成后的落定（`settle`）状态，其中落定包括执行成功的兑现（`fulfill`），又称为解决（`resolve`），和执行失败的拒绝（`reject`）。

下面先把期约用起来：

```js
fecth("/url")	// 发请求，返回Promise对象
.then(response => {
    if(!response.ok) 	// 404等错误
        return null;
    let type = response.headers.get("content-type");
    if(type !== "application/json") // 格式不对
        throw new TypeError(`Expected JSON, got ${type}`);
    return response.json();	// 解析数据，返回Promise对象
})
.then(profile => {
    if(profile)
        displayUserProfile(profile);
    else
        displayLoggedOutProfilePage();
})
.catch(e => {
    if(e instanceof NetworkError)
        displayErrorMessage("Check your internet conection.");
    else if(e instanceof TypeError)
        displayErrorMessage("Something is wrong with our server!");
    else
        console.error(e);
})
```

从上面的代码我们可以总结如下几点：

- Promise落定的`兑现结果`作为实参传递给`then`的第一个参数，`reject`的结果（异常）作为实参传递给`catch`。
- `then`方法的返回值默认为`resolve`结果为其第一个参数的落定的`Promise`对象，该值可以被返回值覆盖，如果返回一个新的`Promise`，就实现了`期约链`。

> 期约看起来很复杂，其实就这么多东西，恰恰是`then`的返回值更容易让人迷惑。

### （2）并行Promise

#### ① Promise.all()

接受一个期约对象的数组作为输入，返回一个期约，如果输入的期约中的任意一个被拒绝，返回的期约也被拒绝，否则返回的期约以每个期约兑现值的数组兑现。

```js
const urls = [...];
promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.all(promises)
.then(bodies => {...})
.catch(e => console.error(e));
```

> 看起来把包含then的期约对象传进去好像有点问题，事实上我们应该明确期约的`创建时机`和`执行时机`，期约的创建是沿着代码执行的流程顺序进行的，但直到同步代码执行完毕才开始执行期约（异步代码），`Promise.all()`只是做了些辅助工作，帮助把多个期约合并成一个看待，而本身并没有异步的效果。

#### ② Promise.allSettled()

类似于上面的函数，该函数也接受一个期约对象数组。但该函数永远不会返回一个被拒绝的期约，它会等待所有期约落定，返回的结果为一个数组，数组的元素包含期约落定状态和兑现结果（如果有）的属性。

#### ③ Promise.race()

该函数也接受一个期约数组，但只返回最快落定的那个期约对象。从名字可以看出来。

### （3）创建期约

可以通过创建期约，自己实现异步函数：

```js
function wait(duration){
    return new Promise((resolve, reject) => {
        if(duration < 0)
            reject(new Error("Time travel not yet implements"));
        setTimeout(resolve, duration);
    })
}
```

## 5、async和await方式

`async`和`await`关键字写异步代码的方式是在期约后提出的，用来简化并隐藏期约，还是为了可读性考虑的，况且引入期约的确比较难以理解。

```js
async function getHighScore(){
    let response = await fetch("/api/user/profile");
    let profile = await response.json();
    return profile.highScore;
}
```

显然我们通过`await`标识异步代码，但要注意只能在`async`标识的函数中使用，此时代码块中处于`await`代码之后的内容会等待异步代码的结果，相当于写作同步格式的回调函数。函数返回的是落成的期约对象。

