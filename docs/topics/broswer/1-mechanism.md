# 第 1 章 执行机制

## 1、构建 dom

## 2、Event loop

所谓事件循环就是周期性地调度任务队列（宏任务和微任务）中的任务到主线程的执行栈。

事件循环主要是说 Js 挂起的异步任务的执行机制，但应当注意的是`页面渲染`和`script`脚本的执行也是作为任务存在的，且是`宏任务`，同样是宏任务的还有`setTimeout`和`setInterval`以及所有的交互事件。`Promises`, `Object.observe`, `MutationObserver`都属于`微任务`。

> MutationObserver 用来监听 dom 操作，dom 操作本身是同步的。

具体的调用机制是：在执行栈为空时，优先调出所有的微任务，包括在该过程中途新加入的微任务，直至微任务队列为空，当前循环结束。之后调出一个宏任务进行执行。进入新的循环。
从下面这个例子可以看出来：

```js
let p1 = new Promise((resolve) => {
  resolve("micro1");
});
p1.then((res) => {
  console.log(res);
  let p2 = new Promise((resolve) => {
    resolve("micro2");
  });
  p2.then((res) => {
    console.log(res);
  });
});
setTimeout(() => {
  console.log("macro1");
}, 0);
```
