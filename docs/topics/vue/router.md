# 第2章 路由
## 1、浅谈前端路由

### （1）为什么需要前端路由？

`url`翻译过来叫做`统一资源定位符`，是下面这种格式`protocol://hostname[:port]/path/[:parameters][?query]#fragment`，除了最后的`fragment`，其对应着网络服务器的一条资源映射。前端路由与请求服务器资源无关（懒加载不提），但`SPA`的场景下是为了标识资源的展示和使用的动作。我们希望这些动作也能像纯`HTML`请求的应用一样被捕获到。最直观的感受是，我们希望页面改变的时候地址栏能改变，我们的浏览状态能被记录下来。

`AJAX`催化了`SPA`的产生，SPA催化了前端路由的产生，考虑不使用前端路由的`SPA`，完全不影响使用，但此时浏览器的前进后退按钮不再可用，历史记录不再能够被记录和保存，这对用户而言的体验是很差的，且当用户点击刷新页面时，页面会回退到网站初始的状态。这是不可忍受的。

那就给前端搞个路由吧。
### （2）如何实现前端路由？
#### hash模式
HTML的`hash`用于快速定位页面标题，在很久之前就开始支持，这里已经有了前后端分离的思想。

```html
<a class="headerlink" href="#design-your-templates" title="永久链接至标题">hash跳转</a>
```

通过以下地址栏可快速定位：`https://host/page.html#design-your-templates`

浏览器地址栏中hash符号`#`之后的内容只用来匹配当前页面的链接元素的定位，在hash改变时不会向服务器发起请求，且会触发`hashchange`事件，这个事件也会导致浏览器保存历史记录状态。当开发者想要切换页面（dom状态）时，只需要通过`window.location.hash`切换个路由，同时监听这个路由的变化更新dom页面。只要你能维护好`hash`和`虚拟页面`的映射关系，这个方法完全可行地。

hash存在一些缺点：

- 地址栏显示不够优雅，多了个小尾巴，不像真的路由
- 路由间传参只能通过地址栏，很难看

hash具有缺点是很正常的，毕竟它的历史使命就不是用来做动态路由的。
于是有了`history`

#### history模式

`history`改善了`hash`的缺点，和普通`url`显示效果一致，同时可以使用专门的对象在路由间传递数据，功能也更强大。
但也存在一个明显的缺点，当修改地址栏路径时会向服务器重新请求资源（修改hash不会），所以服务器需要设置对于该请求的处理（一般重新返回单页面即可），在进入该单页面后在前端再响应地址栏的路由部分。
> `history`对象是浏览器全局对象`document`的子属性。
### （3）为什么需要vue-router？

vue-router插件是对js前端路由api的封装，同时提供强大的映射管理功能，是vue官方项目，同时有`hash`和`history`两种实现方式可用。

:::tip 提醒
后面的讲解主要按照`vue-router 3`来讲，`4`是专门给`vue3`来使用，变化不是特别大，之后在讲到vue3时一块说。
这儿有一篇对比的文章：[vue-router3和4差异](https://blog.csdn.net/wu_xianqiang/article/details/109910155)

因为`vue-router`是专门面向vue开发的插件，所以需要`Vue.use()`注册插件。又因为是官方插件，所以自定义配置信息需要在创建全局vue对象时作为参数传入。
:::

## 2、基本使用

### (1) 配置路由
> 所谓配置路由，本质就是按照`vue-router`可解析的格式定义`路由路径`和`视图`的映射关系。
```js
const router = new VueRouter({
  routes: [
    {
      path: '',
      component: {
        default: Home,
        a: Bar
      },
      name: 'home'
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
> 上面用同时用到了`命名路由`、`动态路由`、`嵌套路由`和`命名视图`，后面会一一介绍。
### (2) 使用

#### 超链接方式
使用`router-link`静态链接方式。

```html
<router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
```

这里就用到了前面说的`name`字段，此时我们可以自由地传递任何对象，并在`this.$route.params`中获取到。
或者使用绝对路径的方式：
```html
<router-link :to="/user/123">User</router-link>
```
#### 编程式
直接动态操作`router`对象。

```js
this.$router.push({ name: 'user', params: { userId: 123 } })
```
### (3) 命令路由
其实前面已经用到了，就是定义路由时起个名字，之后链接或跳转时比较方便。
### (4) 动态路由
动态路由的主要目的是为了把某种模式匹配到的所有路由，全都映射到同个组件。所以尽量不要把它作为路由通信。可以通过`this.$route.params['name']`获取匹配的参数。


:warning: 当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) `$route` 对象：

```js
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  }
```

或者使用导航守卫`beforeRouteUpdate()`：

```js
beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
```

### (5) 嵌套路由

前面已经用到了，就在子路由的视图会占位父视图中的`router-view`标签。
> 注意子路由的路径写法，写成相对路径即可

### (6) 命名视图


## 3、路由组件传参

### （1）怎么传

#### ① url方式

```js
this.$router.push('/details/001')
```

这种传参方式必须配合动态路由来接受，基本不用。

#### ② params方式 :star:

```js
this.$router.push({ name: 'details', params: { id: '001' } })
```

最常用的方式，注意配置路由时不要忘记`name`参数。

#### ③ query方式

```js
this.$router.push('/details/001?kind=car')
this.$router.push({ path: '/details/001', query: { kind: "car" }})
this.$router.push({ name: 'details', params: { id: '001' }, query: { kind: 'car' }})
```

`query`的内容类似于`get`请求跳转，会把内容在地址栏中显示出来，基本不用。

#### ④ hash方式

```js
this.$router.push('/details/001#car')
this.$router.push({ path: '/details/001', hash: '#car'})
this.$router.push({ name: 'details', params: { id: '001' }, hash: 'car'})
```

获取参数时需要使用`$route.hash.slice(1)`，太垃圾了。不用。

### （2）怎么接收

#### ① $router

默认情况下我们通过下面这种方式接收：

```js
this.$route.params['name']
```

> 这样做不好，因为我们写好一个组件后，如果通过这种方式获取路由参数，会造成该组件只能用于路由传参的场景下，如果被用于其他路由没有传指定名称参数的地方会发生错误。即造成了**组件和路由传参功能的耦合**，因为我们也可能想在不传参或传其他参数的场景下使用该组件。这时候我们要用`props`方式接受。

#### ② props

使用路由props传值需要路由开启该选项，以及启动的模式。

```js
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },
  ]
})
```

这种方式叫做`布尔模式`，`this.$route.params` 将会被设置为组件的属性（像`组件传值`一样）。

如果我们需要通过路由给组件传递静态值，可以使用`对象模式`：

```js
props: { newsletterPopup: false }
```

除此之外我们还能对传递的参数预先格式化处理，即采用`函数模式`：

```js
props: route => ({ query: route.query.q })
```

> 这里采用箭头函数。

## 4、导航守卫

<img src="img/image-20220101185107601.png" alt="image-20220101185107601" style="zoom: 50%;" />

### （1）全局

在`router`实例上配置。

#### ① router.beforeEach() :star:

全局前置守卫。

```js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```



<img src="img/image-20220101182447282.png" alt="image-20220101182447282" style="zoom:50%;" />

> 确保`next()`一定被调用且仅调用一次。

#### ② router.beforeResolve()	

全局解析守卫。

 `router.beforeResolve` 注册一个全局守卫。这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

#### ③ router.afterEach()

全局后置钩子。

和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身。

### （2）路由独享

`router.beforeEnter(to, from, next)`

这个在路由中配置，相当于对到达该路由时进行更加精细化的配置，这里的`to`没意义。

### （3）组件独享

为什么需要组件守卫路由呢？是因为对于动态路由会复用组件实例，组件声明周期不会重新触发。

> 注意只有组件有对应路由时才需要定义导航守卫，不然根本不会触发。

#### ① beforeRouteEnter

```js
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  }
```

该钩子在新组件实例被创建前调用，所以无法在其中访问到`this`，可以在`next()`中通过回调函数访问。（:warning:只有这个守卫支持这种写法）

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

#### ② beforeRouteUpdate

这个就是为了前面说的动态路由时使用。可以在其中获取到新的路由参数。

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

#### ③ beforeRouteLeave

导航离开该组件对应的路由时触发，可以用来提醒用户保存界面信息。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

