(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{445:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("h2",{attrs:{id:"_1、快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、快速上手"}},[t._v("#")]),t._v(" 1、快速上手")]),t._v(" "),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cargo new project-name\n")])])]),a("blockquote",[a("p",[a("code",[t._v("cargo")]),t._v("是"),a("code",[t._v("rust")]),t._v("的依赖管理器和构建工具，类似于 node 的 npm。\n项目创建后自动生成初始"),a("code",[t._v("Cargo.toml")]),t._v("配置文件，包含项目的元数据和依赖库。类似于"),a("code",[t._v("package.json")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[t._v("#")]),t._v(" 启动项目")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cargo run\n")])])]),a("blockquote",[a("p",[t._v("此时如果电脑没有预先安装过"),a("code",[t._v("vs")]),t._v("工具，可能会报错找不到"),a("code",[t._v("link.exe")]),t._v("，这不是说 rust 本身依赖 c++，只是为了更好地与 windows 上的库交互。")])]),t._v(" "),a("p",[t._v("通过以下命令也能安装依赖的链接器：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("rustup toolchain "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stable-x86_64-pc-windows-gnu\n")])])]),a("h3",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),a("p",[t._v("官方依赖仓库在"),a("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("crates"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("通过执行"),a("code",[t._v("cargo build")]),t._v("构建项目时会自动安装依赖包，之后在代码中通过"),a("code",[t._v("use")]),t._v("导入使用了。")]),t._v(" "),a("blockquote",[a("p",[t._v("在编译项目之前可以使用"),a("code",[t._v("check")]),t._v("命令预检查语法。")])]),t._v(" "),a("h3",{attrs:{id:"语法初体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法初体验"}},[t._v("#")]),t._v(" 语法初体验")]),t._v(" "),a("p",[t._v("通过下面一个猜一猜小游戏感受一下Rust的语法：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("猜一猜小游戏")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入需要的标准库和第三方库函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("rand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rng")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("cmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guess the number!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取随机整数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" secret_number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("rand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("thread_rng")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen_range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入类似于do...while的循环体")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please input your guess."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明可变String")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed to read line"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型转换，异常捕获。match类似于switch...case用法")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 格式化输出")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You guessed: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("secret_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Less")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Too small!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Greater")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Too big!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Equal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You win!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);