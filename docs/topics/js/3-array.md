# 第 3 章 数组

## 1、创建数组

### （1）字面量方法

```js
let count = [1, , "3"];
```

> 元素间通过逗号分隔，元素为空时表示`稀疏数组`。

### （2）拓展操作符

```js
let a = [1, 2, 3];
let b = [0, ...a, 4]; // [0, 1, 2, 3, 4]
```

数组字面量的拓展操作符适用于任何`可迭代对象`，是一种`浅拷贝`。

> 注意区别于之前的拓展操作符在对象字面量中拓展对象属性的用法。

### （3）Array() 构造函数

- `不传`参数创建空数组。
- 传`单个数值`参数指定数组长度。
- 传`多个`参数或`单个非数值`参数代表初始数组元素。

### （4）Array.of()

`Array.of()` 和 `Array()` 构造函数之间的区别在于处理整数参数：

`Array.of(7)` 创建一个具有单个元素 **7** 的数组，而 `Array(7)`创建一个长度为 7 的空数组（**注意：**这是指一个有 7 个空位的数组，而不是由 7 个`undefined`组成的数组）。

### （5）Array.from()

ES6 新增**工厂函数**。传入`可迭代对象`或`类数组对象`生成数组，第二个参数可传入函数，数组的每个元素传入该函数，以返回值作为数组的实际元素。类似于后面提到的`map()`方法。

## 2、数组长度

数组长度通过`array.length`获取，对于稠密数组该值表示数组元素数量，对于稀疏数组则不是这样，下面介绍稀疏数组。

`稀疏数组`相当于包含`undefined`元素（稀疏项）的非稀疏数组。

```js
let a = [];
a[100] = 1;
a.length; // 101
a.length = 100;
a[100]; // undefined
```

> 稀疏数组实际上是以一种压缩的形式存储的。

可以通过`push()`和`delete`添加和删除数组元素，注意 delete 不会影响数组长度，只是把删除元素换为`undefined`。

## 3、数组方法

### (1) 原地操作

原地操作会修改数组本身。

#### push() :star:

返回修改后数组长度，下面三个相同。

#### pop() :star:

#### shift()

前置 pop。

#### unshift()

每次在`head`位置`push`元素。

#### fill() :star:

快速`填充`方法，第一个参数为填充元素，后两个可选参数用来指定填充范围，不指定默认全部填充。
:warning: 考虑下面的代码：

```js
let doubleArr = new Array(10);
doubleArr.fill(new Array(10));
```

此时快速创建了一个`二维数组`，但是事实上所有内层数组都指向同一个数组，这里的`new Array()`只会执行一次，太坑了。所以`fill()`方法事实上只能填充`value`，而不是`obj`。
可以用下面的方法快速生成二维数组：

```js
let doubleArr = Array.from(Array(10), () => {
  return Array(10).fill("default");
});
```

> 很是巧妙。可以把`Array()`当作`new Array()`来使用。

#### sort() :star:

排序，`sort(compareFunction)`，:bell:不指定排序函数默认把元素转化为字符串后升序排序，所以对数值数组排序是不对的。
升序：

```js
sort((a, b) => a - b);
```

### (2) 非原地方法

不修改原来数组，返回新的数组。

#### slice()

切片，`slice(start, end)`。

#### splice()

可同时执行删除和插入操作。
`splice(pos, delete_num, [...add_elem])`

> `vue2`无法监听通过索引对数组的修改。除了`Vue.set()`以外还能使用`splice()`，因为已经重写了该方法。

#### concat()

合并数组，`concat(...array)`

#### reverse()

翻转数组

迭代方法是指一系列能够顺序地对数组的每一元素进行操作的方法。传入的第一个参数都是一个操作函数，不会对稀疏数组中的`undefined`元素作用该函数。

### (3) 迭代操作

迭代操作会访问到所有元素，用来操作、审查元素。

#### forEach()

最基本的迭代方法，无返回值。

```js
array1.forEach((element) => console.log(element));
```

#### map()

迭代每一个元素，把**函数返回值构成的数组作为方法的返回值**。

#### filter()

是一种对数组的过滤方法，传入的是一个`断言函数`（即返回值为布尔值），方法的返回是所有经该函数后返回值为`true`的元素构成的数组。

#### find()

查找方法，传入断言函数，**返回满足条件的第一个元素**。

同理**`findIndex()`**返回元素的索引值。

#### every()和 some()

断言方法，传入断言函数，返回值为布尔值。

#### reduce()

归并方法，最终产生一个值，也称为注入（inject）和折叠（fold）。
`reduce(func, initValue)`

```js
let a = [1, 2, 3, 4, 5];
a.reduce((x, y) => x + y, 0); // 15
```

接受两个参数，第一个为归并函数，第二个为初始归并值。省略第二个参数时以第一个数组元素作为初始归并值（忽略第一次归并）。
![1657524207651](image/3-array/1657524207651.png)

可以使用`reduceRight()`方法从右向左归并。

### (4) 其他方法

#### flat()

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

> 递归深度即为去掉的内层中括号的层数。

#### includes()

检测数组元素。

#### join()

拼接数组为字符串，是`split()`的反函数。

## 4、拓展操作

出现在等号`右边`时具有`解构`效果，用于赋值、合并数组：

```js
let a = [1, 2, 3];
let b = [...a, 4, 5];
```

可以把任意可迭代对象拓展为数组：

```js
let a = [..."hello"];
```

出现在等号左边时具有`收集`效果，

```js
const [first, ...rest] = 'letter'

> 在函数传参时，也有一个隐含的等号操作，所以同样可以用拓展符号。
```
