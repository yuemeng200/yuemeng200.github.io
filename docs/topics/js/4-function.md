# 第 4 章 函数

## 1、概述

JavaScript 的函数可以`嵌套定义`，很多奇怪的特性就是由此产生的。

### （1）定义函数

#### ① function 关键字声明

```js
function func(){...}
```

这种定义方式称为`函数声明`（区别于后面的`函数表达式`），值得注意的是**这种声明语句会被提升到其作用域块的顶部**，即可以在定义之前使用函数。

#### ② 函数表达式

```js
const f = function fact(x){...}
```

即把函数赋值给常量或变量，此时的函数名是可以省略的（常常省略），使用如上的`f()`来调用函数。

注意此时就没有语句提升的说法，因为**赋值是发生在程序解释执行阶段，编译时并不知道有这个函数**。

#### ③ 箭头函数

是一种简洁的函数定义语法。

```js
const sum = (x, y) => {
  return x + y;
};
```

- 如果函数体仅一个 return 语句，return 关键字和花括号都可以省略。但如果返回的是一个对象字面量时就不应该省略（引发歧义），或者把这个函数体放在圆括号内。
- 如果箭头函数仅一个参数，参数列表的圆括号也能省略。

箭头函数另一个极其重要的区别是**它会从定义自己的环境继承`this关键字`的指向**，在后面详细介绍。

#### ④ 嵌套函数

JavaScript 中函数可以嵌套在其它函数内部，可以访问包含自己的函数以及所有更外层函数的参数和变量。

## 2、函数调用

### （1）作为函数调用

非严格模式下的函数调用，调用上下文（this 值）是**全局对象**。

### （2）作为方法调用

方法中的 this 永远指向方法的调用者。在复杂情境下涉及 this 指向问题时，**首先判断 this 所在的函数的调用方式**。

> 如果方法返回的值是对象，则可以继续调用该对象的其他方法，看起来像是一种链式结构，称为`方法作用链`。**我们自己在给对象定义不需要返回内容的方法时可以考虑返回 this，这样就支持了这种方法作用链编程风格。**

下面考虑嵌套函数在被嵌套函数中被调用时 this 指向的问题：

```js
let o = {
  m: function () {
    function f() {
      console.log(this === o);
    }
    f();
  },
};
o.m(); // false
```

此时嵌套函数作为函数被调用，指向为全局对象，这常常与我们的期望不符，可以通过以下方法解决：

```js
let o = {
  m: function () {
    let self = this;
    function f() {
      console.log(self === o);
    }
    f();
  },
};
o.m(); // true
```

这里我们**把原来的 this 临时绑定在另一个名字上**，通过这个名字访问就没有问题了。

除此之外也能通过`箭头函数`解决该问题：

```js
let o = {
  m: function () {
    const f = () => {
      console.log(this === o);
    };
    f();
  },
};
o.m(); // true
```

这是因为**箭头函数中的 this 始终继承其上下文中的 this，与调用方式无关。**

## 3、实参和形参

JavaScript 的函数定义不会指定参数的类型，传入实参时也不做任何检查，事实上连传入的参数个数都不检查。

### （1）形参默认值

当传入的实参个数少于形参个数时，额外的形参获得默认值，通常是`undefined`，也可在定义时指定默认值。

```js
function func(o, a = []) {...}
```

### （2）剩余形参

剩余形参允许我们传入多余形参数量的实参。

```js
function max(first = -Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) maxValue = n;
  }
  return maxValue;
}
max(1, 10, 20); // 20
```

多余的实参作为数组形式传入，这个机制十分有用。

> 前面学习过拓展操作符在对象和数组字面量中的用法，这次是在函数形参中用法，注意区分。
>
> 事实上在函数调用时传入的实参也可使用拓展操作符形式。

> 其实就算不使用`剩余形参`这种定义形式也能传入多余的实参，在函数内部有一个`arguments`的类数组对象，通过它可以访问的传入的所有实参。但效率较低，已不推荐使用。

### （3）实参与形参的解构赋值

实参到形参的传递默认采用位置对象的形式，在其他语言中还常常有以指定名字的方式（譬如 python）：

```python
def func(first, second):
    ...
    return
func(first=1, second=2)
```

在 JavaScript 中我们使用`解构赋值`的方式达到更强大的效果，除了形参实参的传递，解构赋值也能用在其他需要赋值的情形下。

主要分为对象的解构和数组的解构：

```js
// 对象解构
function f({ x, y }, z) {}
f({ x: 1, y: 2 }, 3);

// 数组解构
function f([x, y, ...coords], ...rest) {}
f([1, 2, 3, 4], 5, 6);
```

::: tip 提示
注意上面的函数参数定义的方式和形参使用的方式相同。
`对象解构`的使用场景是当需要传递一个对象的多个参数时，可以保证知道这个对象都有哪些属性是可用的。
`数组解构`的使用场景是当实参数量不确定，又想在函数体中能全部获取到时。因为尽管调用一个函数时传递多余的参数并不会引发错误，但是这个传递的实参也无法获取到。
:::

## 4、函数属性

函数是一种对象，意味着也可以有自己的属性，函数本身是无状态的，所以可以把函数属性当作一种共享的静态数据，通过定义全局变量也能达到相同的效果，但保存为自己的属性在语义上更合理。

```js
function f(){...}
f.counter = 0;
```

## 5、闭包

闭包是 js 的一种机制，即**函数与作用域组合起来解析函数变量的机制**，而不是什么功能。闭包提供了一些特性，有时候也会带来不便和困惑，理解它是十分重要的。

JavaScript 使用`词法作用域`（lexical scoping），这是闭包产生的根本原因，事实上大部分语言都是用词法作用域，**即函数执行时使用的是定义函数时生效的变量作用域，而不是调用函数时生效的变量作用域**。但为什么其他语言就不会有闭包的考量？并非其他语言不存在闭包，闭包无处不在，只有在 js 环境下闭包机制会产生意想不到的效果，这在嵌套函数中十分常见，因为嵌套函数存在时，我们不得不考虑一种函数的定义和调用时在不同作用域的情形：

```js
let scope = "global scope";
function checkscope() {
  let scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
checkscope()(); // localscope
```

这里的`checkscope`函数的返回值是`f`函数，在把`f`作为函数调用时，它使用的变量来自于定义它的环境中，就像是它记忆了自己出生时的环境。函数本身是无状态的，由于闭包的存在，它看起来好像也能储存一些状态，这就是闭包的影响。

## 6、函数属性、方法

### （1）属性

#### length

只读属性，返回函数的元数，即形参个数。

#### name

只读属性，表示函数定义时使用的属性。

#### prototype

除箭头函数外，所有函数都有这个属性。

### （2）方法

#### call()

把函数绑定到其他对象上调用一次。此时函数的`this`的指向变为该对象。

```js
f.call(otherO, 1, 2);
```

后面的参数表示传入函数的实参。

#### apply()

和`call()`一样，只是传入的实参以数组的形式提供，相当于多了个数组解构的过程。

#### bind()

区别于前面的`apply()`和`call()`只能临时绑定调用一次，`bind()`绑定返回一个函数，通过返回的函数可以多次调用具有绑定效果的函数。

> 箭头函数的 this 指向不可变，上面几个方法都无法改变箭头函数中 this 的指向。

除了把函数绑定到对象，bind()还能提供`柯里化`的效果，即绑定对象时把参数也传过去，这时的参数也和函数绑定了起来。

```js
let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
succ(2); // 3
```

> 截止到目前，js 的基础语法已经介绍完毕。
>
> 然而事实上 js 的新特性（利于类、异步编程和元编程等）已经成为了真正的标准而被广泛应用，同时掌握 js 在浏览器中的常用 API 及在 node 下的生态也是十分必要的，这些内容都会在后面的章节一一介绍。
