# 第 5 章 DOM

## 1、DOM 模型

### (1) 节点类型

节点的类型包括：

- Document
- DocumentType
- Element
- Attribute
- Text
- Comment
- DocumentFragment

> 所有节点类型都继承自`Node`对象。

### (2) Node 接口

对于所有类型节点通用的属性和方法。

#### 属性

- nodeType
- nodeName
- nodeValue
- textContent
- baseURI：当前网页绝对路径
- nextSibling：后一个兄弟节点
- parentNode
- parentElement：父元素节点，排除其他类型节点
- lastChild
- childNodes
- isConnected：当前节点在 document 中

#### 方法

- appendChild(Node)
- hasChildNodes()
- cloneNode(deep)
  克隆节点拷贝所有属性，但新节点会丧失所有绑定的事件回调。要注意处理新节点的`id`和`name`。
- insertBefore()
  parentNode.insertBefore(newNode, referenceNode)
- removeChild()

### (3) 属性

只有`Element`节点才有属性。

#### 获取属性

Element.attributes

#### 操作属性

- getAttribute()
- setAttribute()
- hasAttribute()
- removeAttribute()

### (4) style

[参考](http://javascript.ruanyifeng.com/dom/css.html)

### (5) document 对象

document 对象是文档的根节点，每张网页都有自己的 document 对象。

#### 属性

- documentElement
- body
- head
- scrollingElement
  ```js
  // 页面滚动到浏览器顶部
  document.scrollingElement.scrollTop = 0;
  ```
- activeElement
- documentURI：网址，会随`#anchor`变化
- location：提供 URL 信息及相关操作方法
- cookie

#### 方法

- querySelector()：接收`css选择器`作为参数，多个满足条件只第一个
- querySelectorAll()
- getElementsByTagName()
- getElementsByClassName()
- getElementsByName()
- getElementById()
- createElement()
- createTextNode()
- createEvent()
- addEventListener()
- removeEventListener()
- dispatchEvent()

### (6) Element 对象

#### 属性

- innerHTML
- outerHTML

### (7) 事件

#### 类型

[详情](http://javascript.ruanyifeng.com/dom/event-type.html)

#### 事件模型
