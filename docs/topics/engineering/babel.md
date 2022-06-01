# babel

## 过程

### parse

`词法分析`得到`tokens`，`语法分析`递归得到`AST`。

### transform

遍历 AST，调用相应的`Vistor`函数，完成对代码的修改。
babel 本质上就是一个`transform`工具。

### generate

生成目标字符串，并进行 `sourcemap`


