(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{448:function(s,a,t){"use strict";t.r(a);var r=t(56),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"第3章-安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第3章-安全"}},[s._v("#")]),s._v(" 第3章 安全")]),s._v(" "),t("h2",{attrs:{id:"_1、csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、csrf"}},[s._v("#")]),s._v(" 1、CSRF")]),s._v(" "),t("p",[t("code",[s._v("跨站请求伪造")]),s._v("（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。")]),s._v(" "),t("p",[s._v("举例：")]),s._v(" "),t("p",[t("strong",[s._v("非法网站b")]),s._v("内嵌访问"),t("strong",[s._v("合法网站a")]),s._v("接口的"),t("code",[s._v("<script>")]),s._v("、"),t("code",[s._v("<img>")]),s._v("标签（form表单亦可，只要不受跨域限制即可），且同时网站a的身份验证信息已经存在于浏览器的cookie中，那就会带着该cookie访问网站a，实现注销用户、转账等危险操作。")]),s._v(" "),t("p",[s._v("举例：")]),s._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://www.example.com/index.php?action=delete&id=123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),t("p",[s._v("预防措施：")]),s._v(" "),t("ul",[t("li",[s._v("RESTflu API")]),s._v(" "),t("li",[s._v("token")])]),s._v(" "),t("h2",{attrs:{id:"_2、xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、xss"}},[s._v("#")]),s._v(" 2、XSS")]),s._v(" "),t("p",[t("code",[s._v("跨站脚本")]),s._v("（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会运行代码。")]),s._v(" "),t("p",[s._v("举例：")]),s._v(" "),t("p",[s._v("用户在合法网站a的评论区输入"),t("code",[s._v("<script>")]),s._v("脚本，如果后端不对该评论检查而直接当作一般评论在页面展示，该评论内容就会作为js脚本运行，可以通过``document.cookie"),t("code",[s._v("拿到用户隐私内容，然后创建个指向非法站点的隐藏的")]),t("iframe",[s._v("`，并通过拼接url的方式把数据发出去。")])]),s._v(" "),t("p",[s._v("预防措施：")]),s._v(" "),t("ul",[t("li",[s._v("输入检测")])]),s._v(" "),t("h2",{attrs:{id:"_3、sql注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、sql注入"}},[s._v("#")]),s._v(" 3、sql注入")]),s._v(" "),t("p",[s._v("后端对用户登录验证返回用户信息的场景：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM user_table WHERE username=\'"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"' AND password='\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("当前端传过来的用户名为"),t("code",[s._v("'or 1=1 --")]),s._v("，密码任意时。上面的sql语句填充结果如下：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" user_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--'AND password=‘...")]),s._v("\n")])])]),t("p",[s._v("此时所有用户信息全部泄露。")]),s._v(" "),t("p",[s._v("预防措施：")]),s._v(" "),t("ul",[t("li",[s._v("sql预编译")])])])}),[],!1,null,null,null);a.default=e.exports}}]);