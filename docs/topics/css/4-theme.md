# 主题

## 1、继承

### （1） 类型

继承即**元素的属性值是否继承父级元素的相同属性的值**。

> 记住`background`默认是不继承的，默认值为`transparent`，所以我们常常有种继承的错觉。

我们可以通过几个关键字手动更改属性的继承性：

- inherit：强制继承。
- initial：设置为浏览器默认样式，如果没有默认样式设置无效。
- unset：重置属性，回归初始状态。

还有一个`all`属性，相当于引用该元素的所有属性，指定`all: unset;`就可以重置所有属性为初始值。

### （2）自然继承

以下属性会默认继承：

- font
- font-weight
- font-size
- font-style
- text-indent：文本缩进
- text-align：文本水平对齐
- line-height
- color
- visibility
- 所有文本属性
- 
