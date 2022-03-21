# 第5章 类

## 1、类的定义

JavaScript一直允许定义类，但直到ES6才支持class关键字的形式来创建，本章从老式的方法讲起，对比其定义的形式，事实上在原理上是相同的。

### （1）工厂方法

```js
function range(from, to){
    let r = Object.create(range.methods);
    r.from = from;
    r.to =to;
    return r;
}
range.methods = {
    // 里面写继承的方法，整个花括号为原型的字面量
}

let r = range(1,10);
```

这里把类的原型写成工厂函数的属性只是一种书写习惯。此种生成对象的方式是一种纯函数的方式，工厂函数的关键在于`Object.create()`函数的调用。

### （2）构造函数方法

```js
function Range(from, to){
    this.from = from;
    this.to = to;
}
Range.prototype = {
    // 同上
};

let r =new Range();
```

还记得之前说每个函数都有`prototype`属性吗?只要给一个函数的prototype属性绑定一个有效对象，该函数就能当作构造函数使用，该prototype属性将作为新生成对象的原型。

> 箭头函数没有prototype属性，不能用作构造函数。

构造函数充当类的外在表现，构造函数的名字作为类的名字，通过构造函数来使用一个类。

下面介绍`instanceof`操作符，用来检查对象是不是属于某一类：

```js
r instanceof Range // true
```

> 事实上，该操作符检查的依据并非该对象是否是通过`Range()`构造函数创建，而是看该对象的原型（原型链）是否是`Range.prototype`，比如我们把一个叫`Strange()`的函数的prototype属性设为`Range.prototype`，则通过该构造函数创建的对象也能通过上面的测试。

### （3）class 关键字方法

```js
class Range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    // 类的方法
    func(){
        ...
    }
}
    
let r = new Range(1, 3);
```

- 类体中函数使用字面量中的简写方法。

- 类名后可以通过`extends`关键字继承其他类。
- 类体中代码默认处于严格模式。
- 类声明不提升。

> 后面的讨论都针对这种形式定义的类。

## 2、类的方法和字段

### （1）静态方法

```js
class A{
    static func(){...}
}
// 通过类名调用静态方法
A.func()
```

### （2）私有字段

目前一般通过this写在构造函数或方法中，但最新的标准也开始支持作为字段写在类体中。

### （3）静态字段

目前一般把静态字段写在类体外，最新标准采用以下形式：

```js
class A {
    # size = 0;
    get size(){return this.#size;}
}
```

## 3、继承

> 这里假设你已经有了Java编程基础。

关于在构造函数中使用`super()`：

- 子类必须使用`super()`调用父类构造函数。
- 子类没有定义构造函数时，解释器会默认创建一个，且会自动调用`super()`。
- 在调用`super()`以前不能在构造函数中使用`this`。确保父类先于子类初始化。
