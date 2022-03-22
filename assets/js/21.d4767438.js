(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{422:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第3章-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第3章-数组"}},[t._v("#")]),t._v(" 第3章 数组")]),t._v(" "),s("h2",{attrs:{id:"_1、创建数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建数组"}},[t._v("#")]),t._v(" 1、创建数组")]),t._v(" "),s("h3",{attrs:{id:"_1-字面量方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-字面量方法"}},[t._v("#")]),t._v(" （1）字面量方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("元素间通过逗号分隔，元素为空时表示"),s("code",[t._v("稀疏数组")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_2-拓展操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-拓展操作符"}},[t._v("#")]),t._v(" （2）拓展操作符")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [0, 1, 2, 3, 4]")]),t._v("\n")])])]),s("p",[t._v("数组字面量的拓展操作符适用于任何"),s("code",[t._v("可迭代对象")]),t._v("，是一种"),s("code",[t._v("浅拷贝")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意区别于之前的拓展操作符在对象字面量中拓展对象属性的用法。")])]),t._v(" "),s("h3",{attrs:{id:"_3-array-构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-array-构造函数"}},[t._v("#")]),t._v(" （3）Array() 构造函数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("不传")]),t._v("参数创建空数组。")]),t._v(" "),s("li",[t._v("传"),s("code",[t._v("单个数值")]),t._v("参数指定数组长度。")]),t._v(" "),s("li",[t._v("传"),s("code",[t._v("多个")]),t._v("参数或"),s("code",[t._v("单个非数值")]),t._v("参数代表初始数组元素。")])]),t._v(" "),s("h3",{attrs:{id:"_4-array-of"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-array-of"}},[t._v("#")]),t._v(" （4）Array.of()")]),t._v(" "),s("p",[s("code",[t._v("Array.of()")]),t._v(" 和 "),s("code",[t._v("Array()")]),t._v(" 构造函数之间的区别在于处理整数参数：")]),t._v(" "),s("p",[s("code",[t._v("Array.of(7)")]),t._v(" 创建一个具有单个元素 "),s("strong",[t._v("7")]),t._v(" 的数组，而 "),s("code",[t._v("Array(7)")]),t._v("*创建一个长度为7的空数组（**注意：**这是指一个有7个空位(empty)的数组，而不是由7个"),s("code",[t._v("undefined")]),t._v("组成的数组）。")]),t._v(" "),s("h3",{attrs:{id:"_5-array-from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-array-from"}},[t._v("#")]),t._v(" （5）Array.from()")]),t._v(" "),s("p",[t._v("ES6新增"),s("strong",[t._v("工厂函数")]),t._v("。传入"),s("code",[t._v("可迭代对象")]),t._v("或"),s("code",[t._v("类数组对象")]),t._v("生成数组，第二个参数可传入函数，数组的每个元素传入该函数，以返回值作为数组的实际元素。类似于后面提到的"),s("code",[t._v("map()")]),t._v("方法。")]),t._v(" "),s("h2",{attrs:{id:"_2、数组长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、数组长度"}},[t._v("#")]),t._v(" 2、数组长度")]),t._v(" "),s("p",[t._v("数组长度通过"),s("code",[t._v("array.length")]),t._v("获取，对于稠密数组该值表示数组元素数量，对于稀疏数组则不是这样，下面介绍稀疏数组。")]),t._v(" "),s("p",[s("code",[t._v("稀疏数组")]),t._v("相当于包含"),s("code",[t._v("undefined")]),t._v("元素（稀疏项）的非稀疏数组。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 101")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("稀疏数组实际上是以一种压缩的形式存储的。")])]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("push()")]),t._v("和"),s("code",[t._v("delete")]),t._v("添加和删除数组元素，注意delete不会影响数组长度，只是把删除元素换为"),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_3、数组方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、数组方法"}},[t._v("#")]),t._v(" 3、数组方法")]),t._v(" "),s("h3",{attrs:{id:"_1-迭代方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-迭代方法"}},[t._v("#")]),t._v(" （1）迭代方法")]),t._v(" "),s("p",[t._v("迭代方法是指一系列能够顺序地对数组的每一元素进行操作的方法。传入的第一个参数都是一个操作函数，不会对稀疏数组中的"),s("code",[t._v("undefined")]),t._v("元素作用该函数。")]),t._v(" "),s("h4",{attrs:{id:"_1-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-foreach"}},[t._v("#")]),t._v(" ① forEach()")]),t._v(" "),s("p",[t._v("最基本的迭代方法，无返回值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("array1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-map"}},[t._v("#")]),t._v(" ② map()")]),t._v(" "),s("p",[t._v("迭代每一个元素，把"),s("strong",[t._v("函数返回值构成的数组作为方法的返回值")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"_3-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-filter"}},[t._v("#")]),t._v(" ③ filter()")]),t._v(" "),s("p",[t._v("是一种对数组的过滤方法，传入的是一个"),s("code",[t._v("断言函数")]),t._v("（即返回值为布尔值），方法的返回是所有经该函数后返回值为"),s("code",[t._v("true")]),t._v("的元素构成的数组。")]),t._v(" "),s("h4",{attrs:{id:"_4-find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-find"}},[t._v("#")]),t._v(" ④ find()")]),t._v(" "),s("p",[t._v("查找方法，传入断言函数，"),s("strong",[t._v("返回满足条件的第一个元素")]),t._v("。")]),t._v(" "),s("p",[t._v("同理**"),s("code",[t._v("findIndex()")]),t._v("**返回元素的索引值。")]),t._v(" "),s("h4",{attrs:{id:"_5-every-和-some"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-every-和-some"}},[t._v("#")]),t._v(" ⑤ every() 和 some()")]),t._v(" "),s("p",[t._v("断言方法，传入断言函数，返回值为布尔值。")]),t._v(" "),s("h4",{attrs:{id:"_6-reduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-reduce"}},[t._v("#")]),t._v(" ⑥ reduce()")]),t._v(" "),s("p",[t._v("归并方法，最终产生一个值，也称为注入（inject）和折叠（fold）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 15")]),t._v("\n")])])]),s("p",[t._v("接受两个参数，第一个为归并函数，第二个为初始归并值。省略第二个参数时以第一个数组元素作为初始归并值。")]),t._v(" "),s("p",[t._v("可以使用"),s("code",[t._v("reduceRight()")]),t._v("方法从右向左归并。")]),t._v(" "),s("h3",{attrs:{id:"_2-操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作方法"}},[t._v("#")]),t._v(" （2）操作方法")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"flat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flat"}},[t._v("#")]),t._v(" flat()")]),t._v(" "),s("p",[s("code",[t._v("flat()")]),t._v(" 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expected output: [0, 1, 2, [3, 4]]")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("递归深度即为去掉的内层中括号的层数。")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"concat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concat"}},[t._v("#")]),t._v(" concat()")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push()")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"pop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[t._v("#")]),t._v(" pop()")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"shift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shift"}},[t._v("#")]),t._v(" shift()")]),t._v(" "),s("p",[t._v("前置pop。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"unshift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unshift"}},[t._v("#")]),t._v(" unshift()")]),t._v(" "),s("p",[t._v("每次在"),s("code",[t._v("head")]),t._v("位置"),s("code",[t._v("push")]),t._v("元素。")]),t._v(" "),s("blockquote",[s("p",[t._v("可以用于"),s("code",[t._v("反转链表")]),t._v("！")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"slice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slice"}},[t._v("#")]),t._v(" slice()")]),t._v(" "),s("p",[s("code",[t._v("切片")]),t._v("。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"splice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splice"}},[t._v("#")]),t._v(" splice()")]),t._v(" "),s("p",[t._v("可"),s("strong",[t._v("同时执行")]),t._v("删除和插入**操作。")]),t._v(" "),s("p",[t._v("第一个参数为删除起始位置，第二个参数为删除长度，后面可选参数代表从第一个参数开始插入的各元素。返回删除的内容组成的数组，影响会作用于原数组。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"fill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fill"}},[t._v("#")]),t._v(" fill()")]),t._v(" "),s("p",[t._v("快速"),s("code",[t._v("填充")]),t._v("方法，第一个参数为填充元素，后两个可选参数指定填充范围，不指定默认全部填充。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"includes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#includes"}},[t._v("#")]),t._v(" includes()")]),t._v(" "),s("p",[t._v("检测数组元素。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort()")]),t._v(" "),s("p",[t._v("就地"),s("code",[t._v("排序")]),t._v("，返回排序后数组，默认按照字典序排序（非字符串默认转化为字符串），可传入比较函数，以"),s("strong",[t._v("第一个参数小于第二个参数时返回小于零的值")]),t._v("为比较标准。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);