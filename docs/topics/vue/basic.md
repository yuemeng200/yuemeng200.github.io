# 第1章 基础知识

> 准确地说这完全称不上一份标准的入门教程，只是对其中比较关键的和容易出错的内容进行解释。需要查看详尽文档请移步[vue官方文档](https://cn.vuejs.org/v2/guide/)
## 1、语言规则
总结`vue`的基本语法规则能减少写出常见的bug以及快速与其他框架相区分。
- 在`template`中使用`vm`实例上的内容不需要`this`，在`script`中需要。
- vue的指令为`v-directive="value"`或者`v-directive:key="value"`的格式。`。
- 标签的属性中需要写变量时必须使用`v-bind`，值的最外层引号是语法规定，不是字符意义的引号。
- data 是个函数，不是对象。
- 不要给实例选项传递箭头函数。
- vue响应式只包含实例创建时就存在的数据及其属性。

## 2、指令
### (1) 基本指令
- v-if
- v-for
- v-model
- v-show
- v-html
- v-bind
- v-on
### (2) 解释
- v-bind:[动态参数]="value"可用。
- v-on:<动作>.<修饰符>可用。
- `v-if`直接控制dom元素是否被生成，而`v-show`只是控制`display`属性(而`visibility: hidden`只是视觉上不可见)。详情可查看：[v-if 与 v-show](https://vue3js.cn/interview/vue/show_if.html#%E4%B8%89%E3%80%81v-show%E4%B8%8Ev-if%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90)
-  `v-for`的标准格式：` <li v-for="(item, index) in items" :key="item.key"></li>`，也能遍历对象。

## 3、生命周期
![实例声明周期](https://cn.vuejs.org/images/lifecycle.png)
## 4、computed 和 watch

因为在模板中写表达式难以维护和复用，且vue本身不支持复杂的插值运算。此时可以借助`method`来实现，但性能上还是计算属性更好些，因为**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。

> 如果该计算属性依赖的内容不是响应式依赖，则不会自动触发更新计算操作，如`Date.now()`等。


而`watch`是的功能在于监听。

:warning: 注意`watch`默认无法深度监听，只有监听的对象重新赋值才会触发，可以手动开启深度监听：

```js
watch: {
    data: {
        handler: function(newVal, oldVal){
            ....
        },
        deep: true
    },
}
```
> 当被监听的对象被修改时，深度监听会起作用，但是却无法获取`oldVal`，一种可行的方案是把监听的对象序列化为`computed`，再去监听该`computed`，可参考[这篇文章](https://blog.csdn.net/qq_35859392/article/details/107552326)。

## 疑惑解答
### (1) 为什么data非要是函数不可？
[(38条消息) 为什么Vue组件中的data是一个函数原理(详细易懂)_Test_晓的博客-CSDN博客_vue组件中的data为什么是个函数](https://blog.csdn.net/qq_45473786/article/details/105178975)

首先说明，`根vue实例`的data是可以直接写成一般对象的，因为根只存在一个，不会复用，而组件是会被复用的。为什么被复用就不行呢？原因如下：

这和vue实例被创建的过程有关，vue实例初始化后会把代码中`data`的内容作为属性添加到`vm`上，之后也会把函数之类的内容添加进来，所以我们才能通过`this.属性`的形式访问到。如果写成对象的形式，相同组件在多个位置使用会共享`data`，因为对象是`引用类型`，每次被挂载还是原来对象的引用。
