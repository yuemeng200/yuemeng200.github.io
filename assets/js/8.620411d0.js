(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{401:function(t,a,s){t.exports=s.p+"assets/img/v2-ae5b7d880c10946840c813b5257ce5a2_1440w.ae5b7d88.jpg"},427:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"第1章-基础部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1章-基础部分"}},[t._v("#")]),t._v(" 第1章 基础部分")]),t._v(" "),e("blockquote",[e("p",[t._v("本章节介绍JS与其他语言基本通用的内容，主要包括数据类型、表达式及语句等，只作简要描述。")])]),t._v(" "),e("h2",{attrs:{id:"一、词法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、词法"}},[t._v("#")]),t._v(" 一、词法")]),t._v(" "),e("h3",{attrs:{id:"_1、字面量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、字面量"}},[t._v("#")]),t._v(" 1、字面量")]),t._v(" "),e("p",[t._v("字面量（literal）是直接出现在程序的数值。")]),t._v(" "),e("h3",{attrs:{id:"_2、标识符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、标识符"}},[t._v("#")]),t._v(" 2、标识符")]),t._v(" "),e("p",[t._v("就是名字。")]),t._v(" "),e("p",[t._v("JavaScript的标识符必须以字母、下划线或美元符号开头。")]),t._v(" "),e("h3",{attrs:{id:"_3、保留字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、保留字"}},[t._v("#")]),t._v(" 3、保留字")]),t._v(" "),e("p",[t._v("包括关键字的所有不允许使用的标识符。某些关键字在某些环境下允许作为标识符使用，如可以用作对象的属性名，但尽量不这样用。")]),t._v(" "),e("h3",{attrs:{id:"_4、unicode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、unicode"}},[t._v("#")]),t._v(" 4、Unicode")]),t._v(" "),e("p",[t._v("JavaScript使用Unicode作为字符集，但考虑到可移植性等原因，标识符建议只使用ASCII字符。")]),t._v(" "),e("h2",{attrs:{id:"二、数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、数据类型"}},[t._v("#")]),t._v(" 二、数据类型")]),t._v(" "),e("h3",{attrs:{id:"_1、原始类型和对象类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、原始类型和对象类型"}},[t._v("#")]),t._v(" 1、原始类型和对象类型")]),t._v(" "),e("h4",{attrs:{id:"_1-分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-分类"}},[t._v("#")]),t._v(" （1）分类")]),t._v(" "),e("p",[t._v("JavaScript类型可以分为两类，"),e("code",[t._v("原始类型")]),t._v("和"),e("code",[t._v("对象类型")]),t._v("。普通对象可以看做是属性的集合。")]),t._v(" "),e("p",[t._v("对象类型是可修改的（mutation），原始类型是不可修改的（immutable）。")]),t._v(" "),e("blockquote",[e("p",[t._v("就这点而言，JS和python比较相似。")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("原始类型")]),t._v(" "),e("ul",[e("li",[t._v("数值型")]),t._v(" "),e("li",[t._v("字符串型")]),t._v(" "),e("li",[t._v("布尔型")]),t._v(" "),e("li",[t._v("Symbol型")]),t._v(" "),e("li",[t._v("null")]),t._v(" "),e("li",[t._v("undefined")])])]),t._v(" "),e("li",[e("strong",[t._v("对象类型")]),t._v(" "),e("ul",[e("li",[t._v("array")]),t._v(" "),e("li",[t._v("Map")]),t._v(" "),e("li",[t._v("Set")]),t._v(" "),e("li",[t._v("RegExp")]),t._v(" "),e("li",[t._v("Date")]),t._v(" "),e("li",[t._v("Error")]),t._v(" "),e("li",[t._v("....")]),t._v(" "),e("li",[e("strong",[t._v("函数")])]),t._v(" "),e("li",[e("strong",[t._v("类")])])])])]),t._v(" "),e("h4",{attrs:{id:"_2-差别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-差别"}},[t._v("#")]),t._v(" （2）差别")]),t._v(" "),e("p",[t._v("可变与否只是分类数据类型的基本标准，在底层上它们有更显著的差异：")]),t._v(" "),e("p",[t._v("对于原始类型，只要它们字面量相同，它们就是相等的，即可以被"),e("code",[t._v("===")]),t._v("判真。")]),t._v(" "),e("p",[t._v("而对于对象类型，不同的对象永不相等（相同对象自然相等），也可以认为是因为对象没有字面量，就算两个对象的所有属性都相同，它们依然有些看不见的东西并不相同。")]),t._v(" "),e("p",[t._v("显然，对于对象的相等是如此严格，严格到这种相等已不再具备实际使用意义（完全可以用相同来描述这种关系），然而我们依旧有一种实际需求没有得到满足，那就是如何判断两个对象"),e("code",[t._v("看起来相等")]),t._v("呢（即具有相同的属性）？此时我们就需要枚举每一个属性进行比较来判断。值得注意的是当属性值是对象时我们还需要递归地去比较这个对象属性的子属性，确保每个"),e("code",[t._v("端属性")]),t._v("都被枚举到。")]),t._v(" "),e("blockquote",[e("p",[t._v("想要复制出一个看起来相等的数组对象可以使用"),e("code",[t._v("Array.from()")]),t._v("函数。")])]),t._v(" "),e("h3",{attrs:{id:"_2、数值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、数值"}},[t._v("#")]),t._v(" 2、数值")]),t._v(" "),e("h4",{attrs:{id:"_1-字面量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-字面量"}},[t._v("#")]),t._v(" （1）字面量")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 255")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b10101")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 21")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0o377")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 255")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3333")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.333")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.02e-23")]),t._v("\n")])])]),e("h4",{attrs:{id:"_2-常用运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用运算"}},[t._v("#")]),t._v(" （2）常用运算")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Math类")]),t._v(" "),e("ul",[e("li",[t._v("pow()")]),t._v(" "),e("li",[t._v("round()")]),t._v(" "),e("li",[t._v("random()")])])]),t._v(" "),e("li",[t._v("Number类\n"),e("ul",[e("li",[t._v("parseInt()")]),t._v(" "),e("li",[t._v("parseFloat()")]),t._v(" "),e("li",[t._v("isNaN()")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("数值的"),e("code",[t._v("toString()")]),t._v("方法值得注意，默认无论什么进制，都会转化为十进制字符串，如果想要保持原来的格式需要使用"),e("code",[t._v("toString(N)")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_3、字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、字符串"}},[t._v("#")]),t._v(" 3、字符串")]),t._v(" "),e("p",[t._v("JavaScript使用Unicode字符集的UTF-16编码，以2个字节作为基本字单元，任何字符是基本字单元的整数倍（大部分为单个基本字单元大小）。字符串的length方法是基本字段元的长度。使用"),e("code",[t._v("for/of")]),t._v("循环或"),e("code",[t._v("...")]),t._v("操作符迭代字符串时以单个字符为单元。")]),t._v(" "),e("h4",{attrs:{id:"_1-常用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用方法"}},[t._v("#")]),t._v(" （1）常用方法")]),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"substring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[t._v("#")]),t._v(" substring()")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"slice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slice"}},[t._v("#")]),t._v(" slice()")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"split"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split"}},[t._v("#")]),t._v(" split()")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"indexof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#indexof"}},[t._v("#")]),t._v(" indexOf()")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"includes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includes"}},[t._v("#")]),t._v(" includes()")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"replace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replace"}},[t._v("#")]),t._v(" replace()")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("replace()")])]),t._v(" 方法返回一个由替换值（"),e("code",[t._v("replacement")]),t._v("）替换部分或所有的模式（"),e("code",[t._v("pattern")]),t._v("）匹配项后的新字符串。模式可以是一个"),e("strong",[t._v("字符串")]),t._v("或者一个"),e("strong",[t._v("正则表达式")]),t._v("，替换值可以是一个字符串或者一个每次匹配都要调用的"),e("strong",[t._v("回调函数")]),t._v("。")]),t._v(" "),e("p",[t._v("**如果"),e("code",[t._v("pattern")]),t._v("是字符串，则仅替换第一个匹配项。**所以常用正则表达式使用全局匹配：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first second third"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%20'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "first%20second third"')]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("repalce")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%20'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "first%20second%20third"')]),t._v("\n")])])]),e("p",[e("code",[t._v("g")]),t._v("表示正则表达式的全局匹配，关于正则表达式的使用在后续介绍。")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"trim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trim"}},[t._v("#")]),t._v(" trim()")])])]),t._v(" "),e("h4",{attrs:{id:"_2-模板字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-模板字符串"}},[t._v("#")]),t._v(" （2）模板字符串")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("sum of them is ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("大括号内容作为js表达式解释。")])]),t._v(" "),e("h3",{attrs:{id:"_4、null-和-undefined"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、null-和-undefined"}},[t._v("#")]),t._v(" 4、null 和 undefined")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:s(401),alt:"img"}}),t._v(" "),e("p",[t._v("用null表示程序级别、正常或意料之中的没有值；用undefined表示一种系统级别、意料之外或类似错误的没有值。")]),t._v(" "),e("blockquote",[e("p",[t._v("通常情况我会主动使用null而从不使用undefined。")])]),t._v(" "),e("h3",{attrs:{id:"_5、符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、符号"}},[t._v("#")]),t._v(" 5、符号")]),t._v(" "),e("p",[t._v("符号类似于一种没有字面量的字符串，它最主要的特点是每次通过"),e("code",[t._v("Symbol(string)")]),t._v("生成的符号都是独一无二的。可以通过对"),e("code",[t._v("Symbol.for()")]),t._v("传入相同字符串时返回相同值的符号。")]),t._v(" "),e("blockquote",[e("p",[t._v("事实上每个对象类型也都是独一无二的，但符号是原始类型的，因为其不可变，且符号具有字符串的某些特性，可以作为对象的属性名。")])]),t._v(" "),e("h3",{attrs:{id:"_6、全局对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、全局对象"}},[t._v("#")]),t._v(" 6、全局对象")]),t._v(" "),e("blockquote",[e("p",[t._v("关于对象的内容在后续章节介绍，这里仅介绍全局对象。")])]),t._v(" "),e("p",[t._v("全局对象是js工作的场景下的一个上帝对象，全局对象的属性是一系列全局定义的"),e("code",[t._v("常量")]),t._v("（undefined等）、"),e("code",[t._v("函数")]),t._v("（eval() 等）和"),e("code",[t._v("对象")]),t._v("（Math）。")]),t._v(" "),e("p",[t._v("因为全局对象的属性是全局定义的，所以可以像全局变量一样使用这些属性，而无需像"),e("code",[t._v("对象.属性")]),t._v("的形式来使用。全局对象通过一个引用自身的属性来访问自己，在浏览器环境中是"),e("code",[t._v("window")]),t._v("，在Node环境中是"),e("code",[t._v("global")]),t._v("，在想要操作全局对象本身时可以这些属性来代替。")]),t._v(" "),e("blockquote",[e("p",[t._v("ES2020定义了"),e("code",[t._v("globalThis")]),t._v("属性以在任何环境下引用全局对象。")])]),t._v(" "),e("h2",{attrs:{id:"三、变量和常量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、变量和常量"}},[t._v("#")]),t._v(" 三、变量和常量")]),t._v(" "),e("p",[t._v("变量容易理解，何为常量？"),e("strong",[t._v("把一个值永久地赋给一个名字，这个名字就是常量。")])]),t._v(" "),e("p",[t._v("常量是指"),e("strong",[t._v("名字和值映射关系的一种绑定关系")]),t._v("，值的可变与否并不因此制约，那是值所属的数据类型所决定的。")]),t._v(" "),e("h3",{attrs:{id:"let"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[t._v("#")]),t._v(" let")]),t._v(" "),e("p",[t._v("我们使用"),e("code",[t._v("let")]),t._v("声明变量，具有块级作用域，和其他高级语言的变量行为基本完全一致。")]),t._v(" "),e("h3",{attrs:{id:"const"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[t._v("#")]),t._v(" const")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("const")]),t._v("声明常量，常量在声明时必须初始化，也是块级作用域。")]),t._v(" "),e("blockquote",[e("p",[t._v("块级作用域指"),e("code",[t._v("{}")]),t._v("包含的代码块（包括在某些时候大括号本身省略时），显然函数作用域也属于块级作用域。")])]),t._v(" "),e("h3",{attrs:{id:"var"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#var"}},[t._v("#")]),t._v(" var")]),t._v(" "),e("p",[t._v("在ES6之前，js只能用var声明变量，var具有一些奇怪的特性，现在尽量避免使用var，但了解这些特性是必要的。")]),t._v(" "),e("ul",[e("li",[t._v("var只有函数作用域，没有块级作用域。一切函数体之外的var变量都是全局变量。")]),t._v(" "),e("li",[t._v("通过var声明的全局变量作为全局对象的属性存在，这点与const和let不同。但是该属性不能通过"),e("code",[t._v("delete")]),t._v("操作符删除。")]),t._v(" "),e("li",[t._v("在同一作用域下使用var"),e("strong",[t._v("多次声明")]),t._v("同名变量是合法的。")]),t._v(" "),e("li",[t._v("var声明的变量会被"),e("strong",[t._v("提升到作用域最前面")]),t._v("（hoisting），故可以在声明之前引用var变量，此时引用的值为undefined（let下这种情况会报错），因为"),e("strong",[t._v("var变量的初始化还是在其定义的位置")]),t._v("。显然这个特性并不会有实际的使用价值，且常常引发错误。")])]),t._v(" "),e("blockquote",[e("p",[t._v("在非严格模式下，可以给从未声明的变量赋值，此时会创建一个新的全局变量，而不论该赋值操作是否在全局作用域下。该全局变量亦是作为全局对象的属性存在，但可以被delete操作删除。")])]),t._v(" "),e("h2",{attrs:{id:"四、语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、语句"}},[t._v("#")]),t._v(" 四、语句")]),t._v(" "),e("blockquote",[e("p",[t._v("JavaScript是类c语言。语句上几乎完全继承了c的语法，暂且不再赘述。只讲述个别特性。")])]),t._v(" "),e("h3",{attrs:{id:"_1、关于遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、关于遍历"}},[t._v("#")]),t._v(" 1、关于遍历")]),t._v(" "),e("h4",{attrs:{id:"for-of"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[t._v("#")]),t._v(" for/of")]),t._v(" "),e("p",[e("code",[t._v("for/of")]),t._v("循环只能作用于"),e("code",[t._v("可迭代对象")]),t._v("，例如数组、字符串和集合等，注意一般对象不是可迭代对象。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    k\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "key"')]),t._v("\n    v\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "value"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("本例用到了"),e("code",[t._v("Map()")]),t._v("和"),e("code",[t._v("解构赋值")]),t._v("，在后面会具体介绍。")]),t._v(" "),e("blockquote",[e("p",[t._v("其中Map的构造函数有些奇怪，只接受可迭代对象（拒绝了js最基本的对象字典）")]),t._v(" "),e("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map")])]),t._v(" "),e("blockquote",[e("p",[t._v("数组的迭代是"),e("code",[t._v("实时")]),t._v("的，迭代时的操作会反馈到之后的迭代过程。")])]),t._v(" "),e("h4",{attrs:{id:"for-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[t._v("#")]),t._v(" for/in")]),t._v(" "),e("p",[e("code",[t._v("for/in")]),t._v("可以枚举任何对象，但只能枚举对象的"),e("code",[t._v("可枚举属性")]),t._v("（在对象章节有介绍），且会枚举继承的可枚举属性，这可能不是我们真正想要的，我们可能只想遍历自己显示添加上的那些属性，于是可以使用"),e("code",[t._v("Object")]),t._v("对象的一些方法结合"),e("code",[t._v("for/of")]),t._v("来枚举一般对象的属性。")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Object.keys()")])]),t._v(" "),e("p",[t._v("返回对象"),e("code",[t._v("属性名")]),t._v("的数组，于是再使用"),e("code",[t._v("for/of")]),t._v("来遍历。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" k "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" o"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    o"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("k\t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Object.values()")])]),t._v(" "),e("p",[t._v("返回对象"),e("code",[t._v("属性值")]),t._v("的数组。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Object.entries()")])]),t._v(" "),e("p",[t._v("返回键值对数组的数组，需要使用二元数组来解构赋值。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("当枚举的的对象是数组时，使用"),e("code",[t._v("for/in")]),t._v("遍历出的内容为数组的"),e("code",[t._v("索引值")]),t._v("，而不是内容，所以遍历数组时最好使用"),e("code",[t._v("for/of")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_2、关于严格模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、关于严格模式"}},[t._v("#")]),t._v(" 2、关于严格模式")]),t._v(" "),e("p",[t._v("严格模式指在脚本或函数体的开头使用"),e("code",[t._v('"use strict"')]),t._v("指令，以对语句提供更强的错误检查，修复了部分语言缺陷。某些编程环境下会默认开启严格模式。")]),t._v(" "),e("p",[t._v("严格模式的要求很多，但在大部分在基础开发都不会涉及或者本身已经成为了一种默认的规范，在这里只介绍常见的几条规则。")]),t._v(" "),e("ul",[e("li",[t._v("不允许使用"),e("code",[t._v("with")]),t._v("语句。实际上with语句在非严格模式下也几乎废弃。")]),t._v(" "),e("li",[t._v("变量在使用前必须声明。之前提到给未声明的变量赋值是允许的，相当于全局变量，这在严格模式下是禁止的。")]),t._v(" "),e("li",[t._v("函数作为函数（而非方法）调用时，"),e("code",[t._v("this")]),t._v("的指向为"),e("code",[t._v("undefined")]),t._v("，而不是全局对象。关于this指向是后面的重点。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);