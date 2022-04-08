(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{400:function(t,a,e){t.exports=e.p+"assets/img/http_cache_type.88d49f43.png"},401:function(t,a,e){t.exports=e.p+"assets/img/HTTPStaleness.38a664f7.png"},402:function(t,a,e){t.exports=e.p+"assets/img/db263db190d4e16a5058f65c4704bc6b.87a57111.png"},439:function(t,a,e){"use strict";e.r(a);var s=e(56),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第-2-章-浏览器缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-浏览器缓存策略"}},[t._v("#")]),t._v(" 第 2 章 浏览器缓存策略")]),t._v(" "),s("h2",{attrs:{id:"_1、缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、缓存"}},[t._v("#")]),t._v(" 1、缓存")]),t._v(" "),s("p",[t._v("缓存是一种保存资源副本并在下次请求时直接使用该副本的技术。当 web 缓存发现请求的资源已经被存储，它会拦截请求，返回该资源的拷贝，而不会去源服务器重新下载。缓存需要合理配置，因为并不是所有资源都是永久不变的：重要的是对一个资源的缓存应截止到其下一次发生改变（即不能缓存过期的资源）。")]),t._v(" "),s("p",[t._v("本文将主要介绍**"),s("code",[t._v("浏览器")]),t._v("**（私有）与"),s("code",[t._v("代理")]),t._v("（共享）缓存，除此之外还有网关缓存、CDN、反向代理缓存和负载均衡器等部署在服务器上的缓存方式，为站点和 web 应用提供更好的稳定性、性能和扩展性。")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:e(400),alt:"What a cache provide, advantages/disadvantages of shared/private caches."}}),t._v(" "),s("h2",{attrs:{id:"_2、浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、浏览器缓存"}},[t._v("#")]),t._v(" 2、浏览器缓存")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:e(401),alt:"Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale."}}),t._v(" "),s("h3",{attrs:{id:"_1-无缓存阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-无缓存阶段"}},[t._v("#")]),t._v(" (1) 无缓存阶段")]),t._v(" "),s("p",[t._v("首次请求资源无法命中缓存，返回请求的头部字段"),s("code",[t._v("Cache-Control")]),t._v("描述了当前资源的缓存策略，具有以下指令：")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:e(402),alt:"640?wx_fmt=png"}}),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Cache-Control")]),t._v("是"),s("code",[t._v("HTTP/1.1")]),t._v("提出的，在此之前使用的是"),s("code",[t._v("Expires")]),t._v("，其只给出了资源过期时间，功能较弱。")])]),t._v(" "),s("h3",{attrs:{id:"_2-强缓存阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-强缓存阶段"}},[t._v("#")]),t._v(" (2) 强缓存阶段")]),t._v(" "),s("p",[t._v("如果缓存存在时，如果存在"),s("code",[t._v("no-cache")]),t._v("会直接跳过该阶段。之后验证"),s("code",[t._v("max-age")]),t._v("是否过期，如果未过期直接使用，过期进入协商缓存阶段。")]),t._v(" "),s("h3",{attrs:{id:"_3-协商缓存阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-协商缓存阶段"}},[t._v("#")]),t._v(" (3) 协商缓存阶段")]),t._v(" "),s("p",[t._v("协商缓存是向服务器端验证本地缓存是否还值得使用。")]),t._v(" "),s("p",[t._v("服务器会在响应资源时设置"),s("code",[t._v("Last-Modified")]),t._v("或"),s("code",[t._v("Etag")]),t._v("首部，前者是资源最后修改时间，后者是资源唯一标识符，后者优先级更高。这两个字段的值会在协商请求时通过"),s("code",[t._v("If-Modified-Since")]),t._v("和"),s("code",[t._v("If-None-Match")]),t._v("携带，服务器验证比对后，有效返回"),s("code",[t._v("304")]),t._v("，并重置"),s("code",[t._v("max-age")]),t._v("，失效返回新的资源。")])])}),[],!1,null,null,null);a.default=_.exports}}]);