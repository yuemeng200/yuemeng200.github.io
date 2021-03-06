# 第 2 章 对象

## 1、介绍

### （1）属性

对象是属性的集合，每个属性都有名字和值，名字可以是`字符串`或`符号`。

设置及访问对象属性有两种书写方式，分别为`object.property`和`object["perperty"]`。

每个属性还有三个`属性特性`（元属性），用来限制能对该属性做**什么**：

- writable（可写）

  是否允许设置属性的值

- enumerable（可枚举）

  是否可被枚举，限制遍历属性时的可见性

- configurable（可配置）

  是否可 delete，以及属性特性是否可被修改

> 大部分内置对象是只读、不可枚举和不可配置的，而默认创建的对象是可写、可枚举和可配置的。

### （2）原型

对象可以从其他对象继承属性，这个被继承的对象称为其`原型`。

> 区别于其他语言子类和父类间的继承关系，js 中不存在其他语言的类的概念的，js 是一切皆为对象，不区分类以及通过该类创建的对象实体。

想到继承我们自然能想到一种对象间层层链接的关系，我们称其为`原型链`，对于任一条原型链一定有一个顶级对象没有原型，这个顶级对象是`Object.prototype`，它是任何`Object对象`的原型，包括我们使用`new Object()`和通过`对象字面量`创建的对象都继承于此。

## 2、创建对象

对象可通过`字面量`、`new关键字`和`Object.create()`函数创建，下面分别介绍。

### （1）字面量

对象字面量是一个表达式，每次求值都会创建一个新的对象。

### （2）new 操作符

```js
let r = new Map();
```

new 后面跟的是`构造函数`，除了内置的构造函数，我们还可以自定义构造函数，在后续章节会介绍。

### （3）Object.create()

```js
let o1 = Object.create(Object.prototype);
```

参数为其所继承的原型。

## 3、属性操作

### （1）访问属性

属性的访问会沿着整条原型链，直到查询到该属性或查询到为 null 的对象。

访问不存在的属性不是错误，会返回`undefined`。

### （2）属性赋值

对属性的赋值究竟是触发`添加新属性`还是`修改属性值`效果还需要进行一些判断。

考虑给对象`o`的`x`属性赋值：

- 如果 o 具有一个名为 x 的`自有可写`属性，修改操作成功。（不可写时操作失败）
- 如果 o 继承了一个名为 x 的`可写`属性，这次赋值会创建一个名为 x 的属性，`覆盖`继承的同名属性。(只读时失败)
- 如果 o 继承的是一个**访问器属性**，会调用访问器方法，不会创建新属性。

> 访问器属性在后面介绍。

### （3）删除属性

`delete`只可删除**configurable 为 true 的自有属性**。

> :bell:可见对属性的操作一定不会影响到其原型。

### （4）测试属性

- #### **in**

  能测试自有属性和继承属性。

  > 注意`for/in`遍历时只能遍历可枚举属性，这里是判断操作。

- #### **hasOwnProperty()**

  能测试自有属性。

- #### **propertyIsEnumerable()**

  能测试可枚举的自有属性。

### （5）枚举属性

- #### Object.keys()

  返回可枚举自有属性名数组。

  > 最常用。

- #### Object.getOwnPropertyNames()

  返回所有自有属性名数组。

- #### Reflect.ownKeys()

  返回所有属性名的数组。

### （6）拓展对象

即将一个对象的属性复制到另一个对象上，同时会覆盖目标对象上的同名属性。

可以使用`for/of`遍历赋值，也可使用`Object.assign()`函数：

```js
Object.assign(target, s1, s2...)
```

至少有`目标对象`和`来源对象`两个参数，各来源对象按照顺序依次对目标对象进行拓展操作，可见当存在多个同名属性时真正起作用的是`最右侧`的来源对象，函数修改目标对象并返回。

> 可以看做对象间从右向左的属性间的合并操作。

于是当不希望更新同名属性时可采用如下写法：

```js
t = Object.assign({}, s, t); // 拓展完再把同名的更新回来
```

除了使用该拓展函数，还可在使用字面量写法创建对象时通过`拓展操作符...`来达到相同效果：

```js
let t = { k: v, ...s1, ...s2 };
```

也是从左向右进行的。

> 注意`...`并非真正的操作符，尽在对象字面量中有拓展对象的功能，在其他上下文中别的作用。

## 4、对象方法

以下是`Object.prototype`上的通用方法：

- #### toString()

  在需要对象的字符串表示时自动调用，默认不提供太多信息，需要覆盖重写。

- #### valueOf()

  在需要对象的非字符串原始类型值时自动调用（通常是数值）

- #### toJSON()

  其实`Object.prototype`上并没有定义该方法，而是一般内置对象都定义了。在`对象序列化`（serialization）时需要调用该方法。

  序列化指把对象状态转换成字符串，之后能恢复到原来状态的机制，用于数据交换。基于`JSON`格式的转换使用`JSON.stringify()`和`JSON.parse()`，注意并非所有类型对象的序列化都能完美恢复。

## 5、补充语法

介绍一些在 es 的最近几个版本中加入的关于对象字面量的新功能。

### （1）省略属性值

```js
let x = 1,
  y = 2;
let o = { x, y };
```

### （2）计算属性名

即用表达式的值作为属性名：

```js
const NAME = "p1";
function compute() {
  return "p" + 2;
}
let p = {
  [NAME]: 1,
  [compute()]: 2,
};
```

### （3）符号作为属性名

前面已经提到过，下面说说需要的场景：

当需要向从第三方代码取得的对象添加新属性时，可能会引发不受控的属性名冲突，此时使用符号作为属性名就可以避免这种风险。

### （4）方法属性的简写

过去这样定义方法属性：

```js
let o = {
    method: function(){...}
}
```

简写后是这样：

```js
let o = {
    method(){...}
}
```

感觉可读性增强了，注意到`vue`语法中普遍采用这种写法。

### （5）访问器属性

之前我们讨论的属性更准确地说应该称为`数据属性`，其实还可以有一个`访问器属性`，包括`获取方法`（getter）和`设置方法`（setter），如果没有定义设置方法称该访问器属性是只读的。

```js
let o = {
    dataProp: value,
    get accessorProp(){
        return ...;
    },
    set accessorProp(){
        ...
    }
}
```

可见访问器方法和普通方法的区别就是属性名前有`get`和`set`标志，访问器属性的意义在于其所表达的语义。

## 6、Object API

关于`Object`有很多重要的 api，有些在前面已经提到过。

### （1）静态方法

- #### Object.assign()

  方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

- #### Object.create()

  用于创建对象。

- #### Object.defineProperty()

  [Object.defineProperty() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

  给对象添加一个属性并指定该属性的配置，其配置`get()`和`set()`。是`Vue`实现变化侦测的关键。

- #### Object.setPrototypeOf()

  设置一个指定的对象的原型到另一个对象或 `null`

  ```js
  Object.setPrototypeOf(obj, prototype);
  ```

## 7、其他对象

### Date

`Date()`返回当前时间的字符串。

`new Date()`返回时间对象，但其表现还是字符串，具有很多实例方法。

### JSON

JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式。注意 json 本身就是个字符串，只是字符串按照一定格式，容易被解析。

它有两个静态方法：`JSON.stringify()`和`JSON.parse()`。

如果对象的属性是`undefined`、函数或 XML 对象，该属性会被`JSON.stringify`过滤。

如果参数对象有自定义的`toJSON`方法，那么`JSON.stringify`会使用这个方法的返回值作为参数，而忽略原对象的其他属性。

### Map

Map 对象是`键值对`的集合，但有自己的特性：

- 键可为任意对象，而不仅仅是字符串或符号，天然的`hashMap`
- 可以记住插入顺序迭代输出

方法和属性：

- set(key, value)
- get(key)
- delete(key)
- keys()
- entries()
- size

  > Map 也是可迭代类型，使用`for...of`和`forEach`进行遍历。

Map 还能和数组相互转化：

```js
let kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

let myMap = new Map(kvArray);
```

### WeakMap

- key 只能为对象
- key 为弱引用，不可枚举（利于垃圾回收）

> 实际场景下，当一个对象不再被强引用（refer=null 时），会自动垃圾回收，但是 Map 会始终强引用着它所依赖的键（除非 delete 掉或者销毁整个 Map），WeakMap 是弱引用。

### Set

Set 对象是`值`的集合。

- 元素唯一性，用于数组去重
- 可以记住插入顺序迭代输出

方法和属性：

- add(value)
- has(value)
- delete(value)
- size

## 8、解构和拓展

对象不是可迭代对象，不能被`...`解构，但可以用来收集属性，同名属性会通过`{}`自动收集。

```js
let obj = {
  name: "yuemeng",
  gender: "male",
  age: "18",
};
const { name, gender, age } = obj;

const { age, ...other } = obj;
```
