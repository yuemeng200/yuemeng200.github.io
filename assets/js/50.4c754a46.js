(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{466:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第-1-章-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-事件"}},[t._v("#")]),t._v(" 第 1 章 事件")]),t._v(" "),a("h2",{attrs:{id:"_1、捕获和冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、捕获和冒泡"}},[t._v("#")]),t._v(" 1、捕获和冒泡")]),t._v(" "),a("p",[t._v("默认情况下绑定的回调函数都是在事件的冒泡阶段（从内向外）进行触发，但首先进入的却是捕获阶段（从外向内）。\n无论一个事件被怎样传播，这个对象的"),a("code",[t._v("target")]),t._v("指向实际作用目标（点击元素），"),a("code",[t._v("currentTarget")]),t._v("指向传播路径上当前发挥作用的目标元素。")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("stopPropagation()")]),t._v("阻止捕获和冒泡阶段中当前事件的进一步传播，它不能防止任何默认行为的发生，并且它身上的其他同事件监听器依然发挥作用，如果不想那样做可以使用"),a("code",[t._v("stopImmediatePropagation()")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("任意时刻可以通过"),a("code",[t._v("window.event")]),t._v("获取到当前正在处理的事件（最好别这样用）")])]),t._v(" "),a("h3",{attrs:{id:"_1-addeventlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-addeventlistener"}},[t._v("#")]),t._v(" (1) addEventListener")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// userCaptrure 是否开启捕获时回调，默认 false")]),t._v("\ntarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("useCapture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 升级版")]),t._v("\ntarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("options 包含以下属性：")]),t._v(" "),a("ul",[a("li",[t._v("capture: 表示 listener 是否在事件捕获阶段触发。")]),t._v(" "),a("li",[t._v("once: Boolean，表示 listener 是否在其被调用之后自动移除。")]),t._v(" "),a("li",[t._v("passive: Boolean，表示 listener 是否屏蔽 preventDefault()。")]),t._v(" "),a("li",[t._v("signal：AbortSignal，该 AbortSignal 的 abort() 方法被调用时，监听器会被移除。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("listener")]),t._v("默认接受 Event 对象。然而"),a("code",[t._v("options")]),t._v("并非总是被支持的，可以通过下面的手段来监测"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#option%E6%94%AF%E6%8C%81%E7%9A%84%E5%AE%89%E5%85%A8%E6%A3%80%E6%B5%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("option 支持的安全检测"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_2-passive-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-passive-使用场景"}},[t._v("#")]),t._v(" (2) passive 使用场景")]),t._v(" "),a("p",[a("code",[t._v("preventDefault()")]),t._v("方法阻止事件触发后默认动作的发生，但并不会阻断事件在 dom 上的传播。\n在处理某些触摸事件（以及其他）的事件监听器时，会延迟浏览器的主线程执行页面滚动（确保没有阻止该默认效果），导致滚动处理期间性能可能大大降低，这时候 passive 相当于提前告知浏览器，默认效果不会被阻止，放心滚动即可。")])])}),[],!1,null,null,null);e.default=n.exports}}]);