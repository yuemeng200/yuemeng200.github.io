# 第 1 章 事件

## 1、捕获和冒泡

默认情况下绑定的回调函数都是在事件的冒泡阶段（从内向外）进行触发，但首先进入的却是捕获阶段（从外向内）。
无论一个事件被怎样传播，这个对象的`target`指向实际作用目标（点击元素），`currentTarget`指向传播路径上当前发挥作用的目标元素。

使用`stopPropagation()`阻止捕获和冒泡阶段中当前事件的进一步传播，它不能防止任何默认行为的发生，并且它身上的其他同事件监听器依然发挥作用，如果不想那样做可以使用`stopImmediatePropagation()`。

> 任意时刻可以通过`window.event`获取到当前正在处理的事件（最好别这样用）

### (1) addEventListener

```js
// userCaptrure 是否开启捕获时回调，默认 false
target.addEventListener(type, listener, [useCapture]);
// 升级版
target.addEventListener(type, listener, [options]);
```

options 包含以下属性：

- capture: 表示 listener 是否在事件捕获阶段触发。
- once: Boolean，表示 listener 是否在其被调用之后自动移除。
- passive: Boolean，表示 listener 是否屏蔽 preventDefault()。
- signal：AbortSignal，该 AbortSignal 的 abort() 方法被调用时，监听器会被移除。

> `listener`默认接受 Event 对象。然而`options`并非总是被支持的，可以通过下面的手段来监测[option 支持的安全检测](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#option%E6%94%AF%E6%8C%81%E7%9A%84%E5%AE%89%E5%85%A8%E6%A3%80%E6%B5%8B)

### (2) passive 使用场景

`preventDefault()`方法阻止事件触发后默认动作的发生，但并不会阻断事件在 dom 上的传播。
在处理某些触摸事件（以及其他）的事件监听器时，会延迟浏览器的主线程执行页面滚动（确保没有阻止该默认效果），导致滚动处理期间性能可能大大降低，这时候 passive 相当于提前告知浏览器，默认效果不会被阻止，放心滚动即可。
