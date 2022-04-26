# 第 2 章 接口

## 1、使用

TS中的接口是对`外形`的一种规范性描述。最常见的是描述对象的外形，也能描述函数外形。

用来创建指定格式对象、函数传参等时的类型检查。

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
```

在 js 中有这样一种形参和实参的映射方式：

```js
function test({x, y}){
    ...
}
test({x: 1, y: 2})
```

利用的是对象的解构赋值，`ts`要比这强大太多了。

接口会进行严格的检查，任何存在多余属性的实例化都是不可行的：

```ts
let label: LabelledValue = {
    label: 'label',
    num: 2
} // 会出错
```

也可以声明属性是`可选`的：

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

> `interface`声明的类型中的属性也必须显示地声明类型。

## 2、只读属性

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```

只有在声明变量时为其属性赋值，之后不能重新赋值（能修改）。

这个看起来和`const`的限制是一样的，区别是`const`用来修饰变量。

> 注意两者都是限制所修饰的内容不能重新赋值，但没有限制其修改。
>
> 有一个`ReadonlyArray<T>`数组类型，这种数组既不能被再赋值也不能再赋值其数组元素。

## 3、属性检查

对象字面量会被特殊对待而且会经过 `额外属性检查`，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

如下：

```tsx
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });
```

即我们拿`对象字面量`去兼容`interface`采用的是严格的策略，即不能有额外的参数。

于此对立的就是，对象变量在兼容`interface`时没有这个问题：

```tsc
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

除此之外使用类型断言也可以规避这个问题：

```tsc
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

而真正可控的方式是通过使用`字符串索引签名`来解决这个问题：

```ts
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```

可以用来匹配任意多余的属性。

> 永远确保自己清楚为啥非要规避掉属性检查。

## 4、函数类型

前面所讲的类型都是修饰变量的外形的，事实上函数的定义也是有外形的，它限制一个函数的定义是否合法，而不是使用函数时传参是否合法。

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

函数的形参名和接口里的可以不一样，只要位置对应就行。

## 5、可索引类型

## 6、类类型

## 7、继承类型

## 8、混合类型

## 9、接口继承类

