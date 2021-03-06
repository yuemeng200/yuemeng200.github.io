---
sidebarDepth: 3
---

# 正则表达式

## 1、介绍

`正则表达式`可以看做是一种用来描述字符串`模式匹配`规则的协议，通过遵循这种协议的语义，我们向正则解析引擎描述自己需要找出什么样的子串。

::: tip
正则表达式的底层实现原理十分复杂（事实上就是仅仅学会正则的用法都不能算是很简单的事情），但可以肯定的一点是，正则模式匹配的平均效率一定比所有你能想到的模型匹配算法要高效得多，所以 **Just use it！**
:::

## 2、体验

前端验证密码复杂性是正则表达式十分重要的使用场景，我们直接从一个实际问题上手，验证用户设置的密码必须满足以下规则：

- 同时包含数字、大小写字母和特殊字符。
- 长度不低于 8 位。

在表单验证场景下，这算比较基础的问题，是如果不使用正则而纯粹手写验证逻辑却几乎无从下手的。
下面直接给出我所想到的一种正则模式：**`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z\s]).{8,}$`**。
现在看不懂没关系，毕竟我也刚学会。

顺便先说下有了正则表达式应该怎么去使用，正则表达式本身在各种语言是通用的，只是调用的`api`略有差异。
在 JS 中直接通过字面量（`/我是正则/`）或者使用构造函数（`new RegExp("我是正则")`）两种方式定义都可以。

![image-20220320223552324](./img/image-20220320223552324.png)

> 其中`exex`和`test`是`RegExp`对象的方法，其余是`String`的方法。在后面会详细介绍这些方法。

比如上面验证密码的可以封装到一个函数里：

```js
function check(password) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z\s]).{8,}$/;
  return re.test(password);
}

check("1Password."); // true
```

:::warning
一般情况下建议不要使用`new RegExp()`传入字符串的方式来声明正则对象，因为正则里有太多使用`\`作为前缀的转义字符表示，而字符串本身也有转义符号，且两者根本不兼容。举个栗子，`\s`在正则里用来匹配空白字符（包括空格、tab、换行），如果我们写成`new RegExp("\s")`，js 引擎会直接当作我们写的是`new RegExp("s")`，因为字符串里根本没有`\s`这种转义，所以直接就帮我们删掉了，那怎么解决呢？就是必须再转义一次写成`new RegExp("\\s")`，当转义较多时这样很容易出错，而使用字面量的方式直接用`/\s/`就行了。
:::

## 3、基本匹配

### (1) 普通字符

一个普通字符单元用来匹配`一个`真实的字符。

| 表示   | 描述                                           |
| ------ | ---------------------------------------------- |
| [ABC]  | 匹配 [...] 中任一字符                          |
| [^abc] | 匹配 [...] 以外的任一字符                      |
| [A-Z]  | 匹配区间 A-Z 中任一字符                        |
| \d     | 匹配数字                                       |
| \D     | 匹配非数字                                     |
| \n     | 匹配换行符                                     |
| \r     | 匹配回车符                                     |
| .      | 匹配除了换行和回车以外的任一字符               |
| \s     | 匹配空白符，包括空格、制表符、换页符和换行符   |
| \S     | 匹配非空白符                                   |
| \w     | 匹配任一字母、数字或下划线，等价于[0-9a-zA-Z_] |

> `[]`内的特殊字符在不引发歧义的情况下是不需要转义的。因为里面是不允许有限定符、定位符等的，只能是字符本身。

### (2) 限定符

限定符用于限制前面字符单元（字符或表达式）出现的次数。
| 表示 | 描述 |
| ---- | ----------------------------- |
| ? | 修饰前面的表达式出现 0 次或 1 次 |
| + | 修饰前面的表达式出现 1 次或多次 |
| \* | 修饰前面的表达式出现任意次 |
| {} | 匹配次数限定符 |
:::tip
`+`和`\*`默认开启贪婪匹配，在其后添加`?`可开启非贪婪模式。
:::

### (3) 定位符

定位符本身不匹配真实的字符，而是限制匹配的开始和结束位置。
| 表示 | 描述 |
| ---- | -------------------------------------- |
| ^ | 匹配输入字符串开始的位置 |
| $ | 匹配输入字符串结尾的位置 |
| \b | 匹配一个单词边界，即字与空格间的位置。 |
| \B | 匹配非单词边界 |

> 正则被用于字段规则验证时，`^`和`$`可以说是必用的。

## 4、高级匹配

### (1) 捕获

`()`用来修饰一个字符表达式，同时会产生附加的捕获效果，可以在后面引用前面的捕获的内容，如`/(...)\1/`。
除此之外在`()`内部匹配的结果会被缓存下来。

```js
let str = "123a456b";
let res = str.match(/([0-9]+)([a-z])/g);
console.log(res); // ['123a', '456b']
```

> `g`是修饰符代表全局匹配。
> 如果只是为了构造表达式不希望有缓存效果（只为了检验），可以使用`(?:)`消除缓存效果。

### (2) 断言

其实定位符也算是一种断言，是一种对位置的断言。这里要说的断言更像一种广义的判断，满足继续、不满足终止。
| 表示 | 描述 |
| ------ | -------------- |
| (?=) | 正向满足前进 |
| (?!) | 正向不满足前进 |
| (?<=) | 逆向满足前进 |
| (?<!>) | 逆向不满足前进 |
:::tip
目前来看我觉得这是正则里最不容易理解的内容，也是十分强大的功能，文章最开始的密码验证的关键就是使用断言描述。事实上只需要正向断言就能解决所有问题，为了避免混淆，可以尽量只使用一个方向的断言。
:::
为什么`/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z\s]).{8,}$/`可以用来检验字符串满足：

- 同时包含数字、大小写、特殊字符
- 至少 8 位

这里使用的正向满足断言，即在`^`匹配后（字符串一旦起始）开始逐个断言，首先是要匹配一个以数字结束的子串，关键的地方在于断言是`非捕获`的，即一旦判断成功就相当于逐个断言从未存在过一样，不会影响后面的任何匹配，之后继续判断以小写字母结尾、以大写字母结尾、以特殊符号结尾，如果断言都成功说明真的存在这些类型的字符，最后我们还要满足位数的要求。至此就写好的。
断言就是这样强大，其非捕获的特性使其可以有`且`的效果，又不影响后续的判断。
逆向断言同理，就是说我匹配后再向前去断言。

### (3) 修饰符

**/pattern/flags**
| 修饰符 | 含义 |
| ------ | ---------------------- |
| i | ignore: 忽略大小写 |
| g | global: 全局匹配 |
|y| sticky: 粘性匹配|
| m | mutipal-line: 多行匹配 |
| s | 开启`.`包含换行符 |

> `g`和`y`修饰的正则都是有状态的（有`lastIndex`属性），区别在于`g`的表现总是一次匹配全部，`y`每次只匹配一个。

## 5、在 Javascript 中使用

### RegExp.prototype.test()

test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
如果正则表达式设置了全局标志，test() 的执行会改变正则表达式 lastIndex 属性。连续的执行 test()方法，后续的执行将会从 lastIndex 处开始匹配字符串（初始为 0）。

### RegExp.prototype.exec()

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
结果数组`[0]`是全部匹配的结果（不区分是否捕获），`[1, n]`为所有捕获分组。除此之外数组还有额外属性`index`和`input`代表当前匹配起始位置和原始输入。

> 可以使用`(?<group-name>content)`来命名捕获。
> 对于全局捕获，每次执行会更新正则匹配状态。

### String.prototype.search()

类似于`RegExp.prototype.test()`，如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。

### String.prototype.match()

和`RegExp.prototype.exec()`表现一致，但在`g`时不同，这个会直接输出所有匹配结果的列表，但无法输出任何捕获的相关信息。

### String.prototype.matchAll()

matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。通过解构迭代器，可以达到数组效果，很好用。
> 除此之外，还有`splot()`和`replace`方法可以使用正则表达式，不再赘述。

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```

## 6、经典案例

- **电子邮箱**：`^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$`
- **网址**：`^(((http|https|ftp):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$`

## 7、相关资源

- [regex101 在线测试工具](https://regex101.com/)
- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- [菜鸟教程](https://www.runoob.com/regexp/regexp-intro.html)
- [github 文档](https://github.com/cdoco/learn-regex-zh)

🎉🎉🎉
