(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{400:function(t,_,v){t.exports=v.p+"assets/img/image-20220320223552324.1d348c12.png"},412:function(t,_,v){"use strict";v.r(_);var s=v(56),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),s("h2",{attrs:{id:"_1、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍"}},[t._v("#")]),t._v(" 1、介绍")]),t._v(" "),s("p",[s("code",[t._v("正则表达式")]),t._v("可以看做是一种用来描述字符串"),s("code",[t._v("模式匹配")]),t._v("规则的协议，通过遵循这种协议的语义，我们向正则解析引擎描述自己需要找出什么样的子串。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("正则表达式的底层实现原理十分复杂（事实上就是仅仅学会正则的用法都不能算是简单的事情），但可以肯定的一点是，正则模式匹配的平均效率一定比所有你能想到的模型匹配算法要高效得多，所以 "),s("strong",[t._v("Just use it！")])])]),t._v(" "),s("h2",{attrs:{id:"_2、体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、体验"}},[t._v("#")]),t._v(" 2、体验")]),t._v(" "),s("p",[t._v("前端验证密码复杂性是正则表达式十分重要的使用场景，我们直接从一个实际问题上手，验证用户设置的密码必须满足以下规则：")]),t._v(" "),s("ul",[s("li",[t._v("同时包含数字、大小写字母和特殊字符。")]),t._v(" "),s("li",[t._v("长度不低于8位。")])]),t._v(" "),s("p",[t._v("在表单验证场景下，这算比较基础的问题，但时如果不使用正则而纯粹手写验证逻辑却几乎难以下手。\n下面直接给出我想到的一种正则模式："),s("strong",[s("code",[t._v("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\\da-zA-Z\\s]).{8,}$")])]),t._v("。\n现在看不懂没关系，毕竟我也刚学会，但我保证你看完后面的章节能和我一样牛逼。")]),t._v(" "),s("h3",{attrs:{id:"_1-在js中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-在js中使用"}},[t._v("#")]),t._v(" (1) 在JS中使用")]),t._v(" "),s("p",[t._v("顺便先说下有了正则表达式应该怎么去使用，正则表达式本身在各种语言是通用的，只是调用的"),s("code",[t._v("api")]),t._v("略有差异。\n在JS中直接通过字面量（"),s("code",[t._v("/我是正则/")]),t._v("）或者使用构造函数（"),s("code",[t._v('new RegExp("我是正则")')]),t._v("）两种方式定义都可以。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(400),alt:"image-20220320223552324"}})]),t._v(" "),s("blockquote",[s("p",[t._v("其中"),s("code",[t._v("exex")]),t._v("和"),s("code",[t._v("test")]),t._v("是"),s("code",[t._v("RegExp")]),t._v("对象的方法，其余是"),s("code",[t._v("string")]),t._v("的方法。")])]),t._v(" "),s("p",[t._v("比如上面验证密码的可以封装到一个函数里：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\\da-zA-Z\\s]).{8,}$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" re"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1Password.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("一般情况下建议不要使用"),s("code",[t._v("new RegExp()")]),t._v("传入字符串的方式来声明正则对象，因为正则里有太多使用"),s("code",[t._v("\\")]),t._v("作为前缀的转义字符表示，而字符串本身也有转义符号，且两者根本不兼容。举个栗子，"),s("code",[t._v("\\s")]),t._v("在正则里用来匹配空白字符（包括空格、tab、换行），如果我们写成"),s("code",[t._v('new RegExp("\\s")')]),t._v("，js引擎会直接当作我们写的是"),s("code",[t._v('new RegExp("s")')]),t._v("，因为字符串里根本没有"),s("code",[t._v("\\s")]),t._v("这种转义，所以直接就帮我们删掉了，那怎么解决呢？就是必须再转义一次写成"),s("code",[t._v('new RegExp("\\\\s")')]),t._v("，当转义较多时这样很容易出错，而使用字面量的方式直接用"),s("code",[t._v("/\\s/")]),t._v("就行了。")])]),t._v(" "),s("h2",{attrs:{id:"_3、基本匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、基本匹配"}},[t._v("#")]),t._v(" 3、基本匹配")]),t._v(" "),s("h3",{attrs:{id:"_1-普通字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通字符"}},[t._v("#")]),t._v(" (1) 普通字符")]),t._v(" "),s("p",[t._v("一个普通字符单元用来匹配"),s("code",[t._v("一个")]),t._v("真实的字符。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表示")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("[ABC]")]),t._v(" "),s("td",[t._v("匹配 [...] 中任一字符")])]),t._v(" "),s("tr",[s("td",[t._v("[^ABC]")]),t._v(" "),s("td",[t._v("匹配 [...] 以外的任一字符")])]),t._v(" "),s("tr",[s("td",[t._v("[A-Z]")]),t._v(" "),s("td",[t._v("匹配区间A-Z中任一字符")])]),t._v(" "),s("tr",[s("td",[t._v("\\d")]),t._v(" "),s("td",[t._v("匹配数字")])]),t._v(" "),s("tr",[s("td",[t._v("\\D")]),t._v(" "),s("td",[t._v("匹配非数字")])]),t._v(" "),s("tr",[s("td",[t._v("\\n")]),t._v(" "),s("td",[t._v("匹配换行符")])]),t._v(" "),s("tr",[s("td",[t._v("\\r")]),t._v(" "),s("td",[t._v("匹配回车符")])]),t._v(" "),s("tr",[s("td",[t._v(".")]),t._v(" "),s("td",[t._v("匹配除了换行和回车以外的任一字符")])]),t._v(" "),s("tr",[s("td",[t._v("\\s")]),t._v(" "),s("td",[t._v("匹配空白符，包括空格、制表符、换页符和换行符")])]),t._v(" "),s("tr",[s("td",[t._v("\\S")]),t._v(" "),s("td",[t._v("匹配非空白符")])]),t._v(" "),s("tr",[s("td",[t._v("\\w")]),t._v(" "),s("td",[t._v("匹配任一字母、数字或下划线，等价于[0-9a-zA-Z_]")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-限定符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-限定符"}},[t._v("#")]),t._v(" (2) 限定符")]),t._v(" "),s("p",[t._v("限定符用于限制前面字符单元（字符或表达式）出现的次数。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表示")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("?")]),t._v(" "),s("td",[t._v("修饰前面的表达式出现0次或1次")])]),t._v(" "),s("tr",[s("td",[t._v("+")]),t._v(" "),s("td",[t._v("修饰前面的表达式出现1次或多次")])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v("修饰前面的表达式出现任意次")])]),t._v(" "),s("tr",[s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("匹配次数限定符")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("+")]),t._v("和"),s("code",[t._v("*")]),t._v("默认开启贪婪匹配，在其用添加"),s("code",[t._v("?")]),t._v("可开启非贪婪模式。")])]),t._v(" "),s("h3",{attrs:{id:"_3-定位符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定位符"}},[t._v("#")]),t._v(" (3) 定位符")]),t._v(" "),s("p",[t._v("定位符本身不匹配真实的字符，而是限制匹配的开始和结束位置。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表示")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("^")]),t._v(" "),s("td",[t._v("匹配输入字符串开始的位置")])]),t._v(" "),s("tr",[s("td",[t._v("$")]),t._v(" "),s("td",[t._v("匹配输入字符串结尾的位置")])]),t._v(" "),s("tr",[s("td",[t._v("\\b")]),t._v(" "),s("td",[t._v("匹配一个单词边界，即字与空格间的位置。")])]),t._v(" "),s("tr",[s("td",[t._v("\\B")]),t._v(" "),s("td",[t._v("匹配非单词边界")])])])]),t._v(" "),s("h2",{attrs:{id:"_4、高级匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、高级匹配"}},[t._v("#")]),t._v(" 4、高级匹配")]),t._v(" "),s("h3",{attrs:{id:"_1-捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-捕获"}},[t._v("#")]),t._v(" (1) 捕获")]),t._v(" "),s("p",[s("code",[t._v("()")]),t._v("用来修饰一个字符表达式，同时会产生附加的捕获效果，可以在后面引用前面的捕获的内容，如"),s("code",[t._v("/(...)\\1/")]),t._v("。\n除此之外在"),s("code",[t._v("()")]),t._v("内部匹配的结果会被缓存下来。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123a456b"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("([0-9]+)([a-z])")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['123a', '456b']")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("g")]),t._v("是修饰符代表全局匹配。\n如果只是为了构造表达式不希望有缓存效果（只为了检验），可以使用"),s("code",[t._v("(?:)")]),t._v("消除缓存效果。")])]),t._v(" "),s("h3",{attrs:{id:"_2-断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-断言"}},[t._v("#")]),t._v(" (2) 断言")]),t._v(" "),s("p",[t._v("其实定位符也算是一种断言，是一种对位置的断言。这里要说的断言更像一种广义的判断，满足继续、不满足终止。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表示")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(?=)")]),t._v(" "),s("td",[t._v("正向满足前进")])]),t._v(" "),s("tr",[s("td",[t._v("(?!)")]),t._v(" "),s("td",[t._v("正向不满足前进")])]),t._v(" "),s("tr",[s("td",[t._v("(?<=)")]),t._v(" "),s("td",[t._v("逆向满足前进")])]),t._v(" "),s("tr",[s("td",[t._v("(?<!>)")]),t._v(" "),s("td",[t._v("逆向不满足前进")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("目前来看我觉得这是正则里最不容易理解的内容，也是十分强大的功能，文章最开始的密码验证的关键就是使用断言描述。事实上只需要正向断言就能解决所有问题，为了避免混淆，可以尽量只使用一个方向的断言。")])]),t._v(" "),s("p",[t._v("为什么"),s("code",[t._v("/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\\da-zA-Z\\s]).{8,}$/")]),t._v("可以用来检验字符串满足：")]),t._v(" "),s("ul",[s("li",[t._v("同时包含数字、大小写、特殊字符")]),t._v(" "),s("li",[t._v("至少8位")])]),t._v(" "),s("p",[t._v("这里使用的正向满足断言，即在"),s("code",[t._v("^")]),t._v("匹配后（字符串一旦起始）开始逐个断言，首先是要匹配一个以数字结束的子串，关键的地方在于断言是"),s("code",[t._v("非捕获")]),t._v("的，即一旦判断成功就相当于逐个断言从未存在过一样，不会影响后面的任何匹配，之后继续判断以小写字母结尾、以大写字母结尾、以特殊符号结尾，如果断言都成功说明真的存在这些类型的字符，最后我们还要满足位数的要求。至此就写好的。\n断言就是这样强大，其非捕获的特性使其可以有"),s("code",[t._v("且")]),t._v("的效果，又不影响后续的判断。\n逆向断言同理，就是说我匹配后再向前去断言。")]),t._v(" "),s("h3",{attrs:{id:"_3-修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修饰符"}},[t._v("#")]),t._v(" (3) 修饰符")]),t._v(" "),s("p",[s("strong",[t._v("/pattern/flags")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("修饰符")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("i")]),t._v(" "),s("td",[t._v("ignore: 忽略大小写")])]),t._v(" "),s("tr",[s("td",[t._v("g")]),t._v(" "),s("td",[t._v("global: 全局匹配")])]),t._v(" "),s("tr",[s("td",[t._v("m")]),t._v(" "),s("td",[t._v("mutipal-line: 多行匹配")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("开启"),s("code",[t._v(".")]),t._v("包含换行符")])])])]),t._v(" "),s("h2",{attrs:{id:"_5、相关资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、相关资源"}},[t._v("#")]),t._v(" 5、相关资源")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("regex101在线测试工具"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.runoob.com/regexp/regexp-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cdoco/learn-regex-zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("github文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("🎉🎉🎉")])])}),[],!1,null,null,null);_.default=a.exports}}]);