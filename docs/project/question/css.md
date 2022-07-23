# CSS相关问题

## TailWindCSS

### 1、PurgeCSS 有可能过多删除 class

```vue
<div class="text-{{  error  ?  'red'  :  'green'  }}-600"></div>
```

因为TailWindCss的`base`本身非常大，需要使用`PurgeCSS`作用在打包阶段删除未使用的样式，在上面的例子中不会自动检测出全部的动态class。

推荐使用[classnames](https://npm.devtool.tech/classnames)

参考：[优势](https://www.zhihu.com/question/337939566)、[使用](https://juejin.cn/post/7083294405280399390 )
