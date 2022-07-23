# 性能

## 1、关于图片懒加载

> 面临的问题是资源体积大，是基于带宽考虑的。

[参考](https://blog.azhubaby.com/2022/01/22/2022-01-22-%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD/)
懒加载的方法作为`scroll`事件的回调，同时配合节流使用。

```js
function lazyload(imgList = [], index = 0) {
  // 获取视口高度和滚动高度
  let viewportHeight = window.innerHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  while (index < imgList.length) {
    if (imgList[index].offsetTop < viewportHeight + scrollTop) {
      imgList[index].src = imgList[index].getAttribute("data-src");
      index++;
      continue;
    }
    break;
  }
  return index;
}
```

> 除了手动计算当前高度，还能通过`getBoundingClientRect()`直接获取当前元素与视口的距离。还有个`IntersectionObserver`对象，可以直接用来监测 dom 进入和离开视口的状态，比前面两个性能都要好。

## 2、关于渲染大批量的列表数据

> 面临的问题是数据多，渲染慢，是基于性能考虑的。

### (1) 虚拟列表

这个实现和前面的`图片懒加载`很相似，每次下拉时确保当前窗口最底部之前的列表项都已经被渲染。整个页面的高度根据数据量提前确定好。

### （2）分片渲染

一次性渲染整个 dom 树非常慢（可以理解为这个宏任务太大了），通过`setTimeout()`批量构建 dom 树，使渲染分批进行，同时在插元素时使用`createDocumentFragment`。
使用`requestAnimationFrame`替代`setTimeout`有性能提升，会在每次触发重绘操作时执行批量插入。

> [关于屏幕帧](https://blog.csdn.net/VhWfR2u02Q/article/details/79492303)

> 这里只是批量渲染，减少了白屏的事件，并不是延迟渲染。

### (3) 分页渲染

监听下拉，触底时渲染一批新数据。

## 3、移动端滚动性能

使用 passive
