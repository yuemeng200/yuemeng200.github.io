# HTTPS

[阮一峰](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)

## 为什么使用

In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as HTTP over TLS,or HTTP over SSL.The authentication aspect of HTTPS requires a trusted third party to sign server-side digital certificates.

不使用 HTTPS 时：
（1） 窃听风险（eavesdropping）：第三方可以获知通信内容。
（2） 篡改风险（tampering）：第三方可以修改通信内容。
（3） 冒充风险（pretending）：第三方可以冒充他人身份参与通信。

使用后：
（1） 所有信息都是加密传播，第三方无法窃听。
（2） 具有校验机制，一旦被篡改，通信双方会立刻发现。
（3） 配备身份证书，防止身份被冒充。

## 基本流程

SSL/TLS 协议的基本思路是采用公钥加密法，也就是说，客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。
将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。
因为非对称加密开销较大，实际优化后过程如下：
（1） 客户端向服务器端索要并验证公钥。

（2） 双方协商生成"对话密钥"。

（3） 双方采用"对话密钥"进行加密通信。
