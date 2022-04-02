# 第 6 章 常用依赖

## 说明

除了`vue-router`和`vuex`外，还有很多官方或第三方的插件，除此之外还有本身不是为 vue 专门设计的 js 库，但事实上已经成了项目必不可少的依赖，一并进行介绍。

## 1、封装 axios

自顶向上分析。

### (1) 视图层

在模板层我们应该只关心自己真正需要的，需要什么直接去拿就好了，只提供`源数据`。

```js
import userAPI from '@/API/user.js'

export default{
  data: {
    return {
      userAPI: new userAPI(),
      user: {
        name: null,
        age: null,
        files: [
          {
            key: 'photo',
            value: null
          },
          {
            key: 'work',
            value: null
          }
        ]
      },
      groupId: null
    }
  },
  methods: {
    async createUser(opt){
      let res = await this.userAPI.createUser(opt)
    }
  }
}
```

### (2) 模块 API

模块 API 根据功能点（如和用户管理相关）封装，提供`method`、`url`以及`type`。

```js
import commonAPI from "@/API/comonAPI.js";
export default class userAPI extends commonAPI {
  constructor() {
    super();
    this.init();
  }
  init() {
    this.urlList = {
      getUser: "/users/:id",
      createUser: "/users/:group_id",
      updateUser: "/users/:id",
      deleteUser: "/users/:id",
      getUserList: "/users",
    };
  }
  async createUser(opt) {
    let { name, age, files, group_id } = opt;
    let options = {
      method: "post",
      group_id,
      uploadFile: true,
      files,
      data: {
        name,
        age,
      },
    };
    return await this.requestAction("createUser", options);
  }
}
```

### (3) 通用模块 API

获取`url`，之后根据类型选择请求 body 的类型，包括`json`、`urlencode`和`formdata`。

```js
import http from './http.js'
export default class commonAPI{
  constructor(){
    // Open loading page
    this.http = new http()
    this.urlList = {}
  }
  async requestAction(action, options){
    options.url = this.urlList.action
    options = this.composeRequest(options)
    return await this.http.request(options)
  }
}
```
