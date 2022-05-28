# 第 12 章 正则表达式

## [591] 标签验证器

闭合标签内部不能有非合法标签`<`。
`reg1`用于消除引发困扰的单标签，注意所有的`t`也要被替换掉，因为我们后续用`t`作为消除标志，之后逐步消除最内部的完整标签。

```js
var isValid = function (code) {
  let reg1 = new RegExp(/<!\[CDATA\[.*?\]\]>|t/g);
  let reg2 = new RegExp(/<([A-Z]{1,9})>[^<]*<\/\1>/);
  code = code.replace(reg1, "-");
  let temp = "";
  while (temp != code) {
    temp = code;
    code = code.replace(reg2, "t");
  }
  return code == "t";
};
```
