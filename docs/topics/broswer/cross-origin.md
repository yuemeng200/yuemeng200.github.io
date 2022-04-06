# 第 1 章 跨域

## 1、什么是跨域？

浏览器存在同源策略，当 js 脚本请求其他源的网页去读取另一个源（域名、端口、协议）的资源时，发生跨域。

> `<script>`标签引入其他资源（获取到内容直接作为脚本执行）和`表单提交`并不会造成跨域。

早期解决跨域使用`JSONP`，但实在太麻烦。
通过 W3C 的`CORS`（跨域资源共享）标准配置后端服务器是跨域的标准解决方案。
而在前后端分离的场景下，还可以通过`反向代理`来解决跨域问题，在开发状态下可以通过配置`devserver`的请求转发达到跨域效果。

> 同源策略发生在浏览器的脚本向服务器发出的请求，本地起得大服务器作为客户端不存在这个限制，比如`postman`。

## 2、跨域资源共享

跨域的 AJAX 分为简单请求和非简单请求。

### (1) 简单请求

满足以下条件的为简单请求

- 请求方法：
  - GET
  - POST
  - HEAD
- 请求头：
  - 用户代理自动设置的首部字段（例如 Connection，User-Agent）
  - Accept
  - Accept-Language
  - Content-Language
  - Last-Event-ID
  - Content-Type
    且只能为`application/x-www-form-urlencoded`、`multipart/form-data`或`text/plain`，不能发`json`

简单请求会自动添加`origin`字段，值为当前的源地址。
如果服务器接受了请求，返回的响应的首部应具有`Access-Control-Allow-Origin`字段，值为接受的源地址或者`*`，否则浏览器不会接收该响应。

> 如果需要携带`Cookie`，请求需要配置`withCredentials=true`，响应头中的`Access-Control-Allow-Credentials`字段代表服务器是否同意接受`Cookie`。
> 对于 CORS 响应，`getResponseHeader()`方法默认只能拿到 6 个基本字段：`Cache-Control`、`Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma`。如果想拿到服务器设置的其他字段，就必须在响应头的`Access-Control-Expose-Headers`里面指定。

### (2) 非简单请求

相较简单请求，非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求（preflight）。
预检请求会询问服务器当前的请求方法和请求头是否被支持，通过`Access-Control-Request-Method`和`Access-Control-Request-Headers`指定。
服务器会返回被当前询问的结果响应，同意时还会有`Access-Control-Max-Age`字段，用来指定当前预检许可的有效期。
之后流程和简单请求一致。

## 3、JSONP

JSONP 的本质即`<script>`标签请求（只支持 get），只是被封装成了函数，对于获取的响应直接作为脚本执行。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据，只是功能太弱。
实现参考：
JSONP 函数根据传入的 url 和参数构造 GET 请求，同时确保后端知道需要返回的回调的名字（后端会封装个函数调用的字符串给前端）。

```js
function JSONP({ url, params, callbackKey, callback }) {
  // 在参数里制定 callback 的名字
  params = params || {};
  params[callbackKey] = "jsonpCallback";
  // 预留 callback
  window.jsonpCallback = callback;
  // 拼接参数字符串
  const paramKeys = Object.keys(params);
  const paramString = paramKeys.map((key) => `${key}=${params[key]}`).join("&");
  // 插入 DOM 元素
  const script = document.createElement("script");
  script.setAttribute("src", `${url}?${paramString}`);
  document.body.appendChild(script);
}

JSONP({
  url: "http://s.weibo.com/ajax/jsonp/suggestion",
  params: {
    key: "test",
  },
  callbackKey: "_cb",
  callback(result) {
    console.log(result.data);
  },
});
```

## 4、反向代理

`正向代理`隐藏客户端，`反向代理`隐藏服务器。
`Nginx`配置如下：

```conf
server {
    listen       80;
    server_name  wwww.baidu.com;
    location / {
        root   html;
        index  index.html index.htm;
        location ^~ /api {
          rewrite ^/api/(.*)$ /$1 break;
          proxy_cookie_domain wwww.baidu.com api.baidu.com;
          proxy_pass https://api.baidu.com/;
        }
    }
}
```

此时即可把访问`www.baidu.com/api`的请求转发到`api.baidu.com/api`来处理。
