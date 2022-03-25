# 第4章 进入vue原理
## 1、响应式原理
首先把所有数据及其属性变为响应式，即在`get`和`set`时能被监测到，对于一个组件实例，具有一个唯一的`watcher`用来记录使用数据的元素，并在数据改变时通知这些元素更新，此时会触发`re-render`，生成新的`虚拟dom`。
响应式发挥作用的前提只针对`data`中初始存在的数据。同时对于给对象添加属性以及给数组元素赋新值也无法触发`set`，因为这不属于`set`的作用范围。此时需要`Vue.set(obj, property/index, value)`的方式手动监听变化。
[原理图](https://cn.vuejs.org/images/data.png)
## 2、Diff算法

