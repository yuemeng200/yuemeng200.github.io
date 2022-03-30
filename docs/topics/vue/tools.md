# 第 6 章 常用依赖

## 说明

除了`vue-router`和`vuex`外，还有很多官方或第三方的插件，除此之外还有本身不是为 vue 专门设计的 js 库，但事实上已经成了项目必不可少的依赖，一并进行介绍。

## 1、axios

### (1) 封装

使用 axios 时只应该提供`method`、`url`和`data`，所以按照需求多级封装一下。

- baseUrl
- headers
- status
- methods
- timeout
- interceptors

### (2) 简单实现

```js
send(config){
    return new Promise(resolve => {
        const {url = '', method = 'get', data = {}} = config;
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function() {
            resolve(xhr.responseText);
        };
        xhr.send(data);
    })
}
```
