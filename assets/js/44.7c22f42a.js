(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{470:function(t,_,s){"use strict";s.r(_);var a=s(56),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第-7-章-其他技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-7-章-其他技术"}},[t._v("#")]),t._v(" 第 7 章 其他技术")]),t._v(" "),s("p",[t._v("下面的内容并不一定是"),s("code",[t._v("vue")]),t._v("特有的，而是前端应用的一些值得参考的"),s("code",[t._v("tips")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_1、服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、服务端渲染"}},[t._v("#")]),t._v(" 1、服务端渲染")]),t._v(" "),s("h3",{attrs:{id:"_1-spa-的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-spa-的缺点"}},[t._v("#")]),t._v(" (1) SPA 的缺点")]),t._v(" "),s("ul",[s("li",[t._v("首屏加载慢")]),t._v(" "),s("li",[t._v("不利于 SEO")])]),t._v(" "),s("p",[t._v("加载慢就不提了，为什么不利于 SEO 呢？\n原因是一般的搜索引擎爬虫工作的方式是对获取到的"),s("code",[t._v("html")]),t._v("页面中的链接进行访问，而无法执行 js 代码获取数据。同时单页面也无法在"),s("code",[t._v("meta")]),t._v("标签为搜索引擎提供信息。")]),t._v(" "),s("h3",{attrs:{id:"_2-什么是-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是-ssr"}},[t._v("#")]),t._v(" (2) 什么是 SSR")]),t._v(" "),s("p",[t._v("用户请求后，响应返回渲染好的 html 模板，可能会包含与 SPA 同构的事件处理 js。")]),t._v(" "),s("blockquote",[s("p",[t._v("而"),s("code",[t._v("预渲染")]),t._v("是在请求前就渲染好所有 html 页面。")])]),t._v(" "),s("h2",{attrs:{id:"_2、权限安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、权限安全"}},[t._v("#")]),t._v(" 2、权限安全")]),t._v(" "),s("h3",{attrs:{id:"_1-接口安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-接口安全"}},[t._v("#")]),t._v(" (1) 接口安全")]),t._v(" "),s("p",[t._v("一般使用"),s("code",[t._v("jwt")]),t._v("，因为"),s("code",[t._v("cookie")]),t._v("和"),s("code",[t._v("session")]),t._v("的方式都是有很大缺陷的，可以把"),s("code",[t._v("token")]),t._v("存到"),s("code",[t._v("sessionStorage")]),t._v("。之后每次请求后端接口都带上，通过设置拦截器放在"),s("code",[t._v("headers")]),t._v("里。")]),t._v(" "),s("h3",{attrs:{id:"_2-路由权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由权限"}},[t._v("#")]),t._v(" (2) 路由权限")]),t._v(" "),s("p",[t._v("这个使用路由拦截，配合着路由懒加载。对于不同权限的菜单可以使用从后端加载的方式。")])])}),[],!1,null,null,null);_.default=v.exports}}]);