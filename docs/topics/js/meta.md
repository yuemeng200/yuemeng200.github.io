# 第 10 章 元编程

“元编程”（meta programming），即对编程语言进行编程。

## 1、Proxy

### (1) 使用

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

```js
// new Proxy(target, handler)

var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);
```

### (2) 实例方法

`Proxy`对象的实例方法相当于一组代理操作，这些操作都能够通过`handler`进行拦截。

#### get()

#### set()

#### apply()

#### has()

#### construct()

## 2、Reflect

`Proxy`帮我们拦截对目标的操作，之后需要重写对拦截操作的实现，而`Reflect`就是帮助我们来实现的，它提供更底层的可控的API。
