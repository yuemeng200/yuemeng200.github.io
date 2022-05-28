# HTTP

## 1、Request

### （1）请求行

Method + URI + Version

### （2）请求头

#### Accept

包括`Accept`、`Accept-Language`、`Accept-Encoding`、`Accept-Charset`等

<img src="./img/httpnegoserver.png" alt="img" style="zoom:50%;" />

#### Origin

用于跨域时表明预检请求或实际请求的源站。

#### Access-Control-Request-Method

#### Access-Control-Request-Headers

#### Authorization

`Authorization: <type> <credentials>`
一般可以用来携带`token`。

#### Referer
Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
在以下两种情况下，Referer 不会被发送：

- 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
- 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。

## 2、Response

### 响应行

响应行：version+status code+reason

### 响应头

#### Access-Control-Allow-Origin

`Access-Control-Allow-Origin: origin | *`

#### Access-Control-Expose-Headers

在跨源访问时，XMLHttpRequest 对象的 getResponseHeader() 方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。

Access-Control-Expose-Headers 头让服务器把允许浏览器访问的头放入白名单，例如：

```text
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

#### Access-Control-Max-Age

预检请求的缓存时间

#### Access-Control-Allow-Credentials

表示跨域请求的`凭证`是否支持被携带，对于简单请求会直接控制响应能否被接收，对于预检请求代表反馈的支持信息。

#### Access-Control-Allow-Methods

#### Access-Control-Allow-Headers

#### Allow

Allow 首部字段用于枚举资源所支持的 HTTP 方法的集合。若服务器返回状态码 405 Method Not Allowed，则该首部字段亦需要同时返回给客户端。如果 Allow 首部字段的值为空，说明资源不接受使用任何 HTTP 方法的请求。这是可能的，比如服务器需要临时禁止对资源的任何访问。

#### Cache-Control

通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。

- public
- private
- no-cache：取消强缓存
- no-store：取消缓存
- max-age=second
- must-revalidate：一旦过期，在验证前不可用

配合`If-Modified-Since`使用。

#### ETag

配合`If-Match`和`If-None-Match`使用。

#### Expires

缓存过期时间，优先级低于`Cache-Control`
