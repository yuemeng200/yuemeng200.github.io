# 第 3 章 安全

## 1、CSRF

`跨站请求伪造`（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

举例：

**非法网站 b**内嵌访问**合法网站 a**接口的`<script>`、`<img>`标签（form 表单亦可，只要不受跨域限制即可），且同时网站 a 的身份验证信息已经存在于浏览器的 cookie 中，那就会带着该 cookie 访问网站 a，实现注销用户、转账等危险操作。

举例：

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

预防措施：

- RESTful API
- token

## 2、XSS

`跨站脚本`（Cross-site scripting，通常简称为 XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会运行代码。

- 窃取 Cookie（document.cookie）
- 监听用户行为（addEventListener）
- 伪造 dom
- 浮窗广告

举例：

用户在合法网站 a 的评论区输入`<script>`脚本，如果后端不对该评论检查而直接当作一般评论在页面展示，该评论内容就会作为 js 脚本运行，可以通过`document.cookie`拿到用户隐私内容，然后创建个指向非法站点的隐藏的`<iframe>`，并通过拼接 url 的方式把数据发出去。

类别：

- 存储型：注入到数据库
- 反射型：注入到服务器
- 基于 DOM：注入到 HTMl
  预防措施：

- 输入检测
- HttpOnly：js 无法操作 cookie

## 3、sql 注入

后端对用户登录验证返回用户信息的场景：

```java
String sql = "SELECT * FROM user_table WHERE username='" + username + "' AND password='" + password + "'";
```

当前端传过来的用户名为` 'or 1=1 --`，密码任意时。上面的 sql 语句填充结果如下：

```sql
SELECT * FROM user_table WHERE username='' or 1=1 --'AND password=‘...
```

此时所有用户信息全部泄露。

预防措施：

- sql 预编译
