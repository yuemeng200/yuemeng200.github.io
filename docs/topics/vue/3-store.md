# 第 3 章 vuex

## 1、说明

> 这里照例是以适配`vue2`的`3.x`版本来讲，`4.x`改变的内容会相应补充。

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用`集中式`存储管理应用的所有组件的状态，并以相应的规则保证状态以一种`可预测`的方式发生变化。
在整个体系中的位置：
![在整个体系的位置](https://v3.vuex.vuejs.org/vuex.png)
可见状态（数据）被渲染到组件上展示，组件交互触发变更数据，需要变更的数据被提交，最后修改状态。
:::note 注意
`vuex`是把`$store`挂载到vm实例上的，在刷新页面时vm实例会被销毁，所以原来保存的状态将会丢失。你可以通过监听页面刷新事件将需要的状态手动保存到`sessionStorage`或者`localStorage`，并在新创建的实例后重新存到`store`。除此之外有个叫`vuex-persistedstate`的工具可以自动帮你这样做，就可以参考这个[回答](https://stackoverflow.com/a/58841356/14456170)使用。但是不建议存到`cookie`中，一是没必要把这些状态带到后端去，在这`cookie`容量限制在`8k`。
:::

## 2、使用

### (1) 定义 store

```js
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
  mutations: {
    increment (state, n) {
      if(n)
        state.count +=n
      else
        state++
    }
  },
  actions: {
    increment (context) {
      setTimeout(()=>{
        context.commit('increment')
      }, 1000)
    }
  }
})
```

### (2) 使用 state

#### ① 直接使用

```vue
<span>{{this.$store.state.count}}</span>
```

#### ② 挂载到 computed

> 直接使用可复用性不高，直接挂载到`data`不合适，因为`data`在我们使用时默认是可以任意修改的，而状态我们希望能受控地修改。显然`computed`更符合这种定位。

```js
  computed: {
    count () {
      return this.$store.state.count
    }
```

也可以使用`mapState`函数快速获取多个状态：

```js
computed: {
  mapState({
    // 箭头函数可使代码更简练
    count: (state) => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: "count",

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数，因为computed是直接作为vm实例的方法使用的。
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
  });
}
```

### (3) 使用 getter

相当于对`state`多包装一层，且相同`getter`在不同位置获取时会开启缓存。
之后可以通过`this.$store.getters`或者`mapGetters`使用。

> 注意是`getters`

除此之外`getter`本身也能返回一个函数，而不仅像普通`computed`一样只能返回值，此时就能在调用时传递参数。

```js
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === id);
  };
}
```

但这种方式就不能再使用缓存了。

### (4) 触发同步 mutation

```js
this.$store.commit("increment", 100);
```

同时多个`mutation`也能展开到`methods`中使用：

```js
methods: {
  ...mapMutations({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  })
}
```

:warning:

- 不要使用`mutation`直接给对象添加属性（这是 vue2 响应式要求的），在使用前就把要用的属性初始化好。或者使用`Vue.set()`。
- `mutation`必须是同步事务，不然会造成预测混乱，违背了`vuex`最初设计的目的。

### (5) 触发异步 action

`action`用来提交多个`mutation`，可以异步地组织`mutation`以及访问整个`store`，但不能直接修改`state`。
使用起来和`mutation`差不多，使用`this.$store.dispatch`或者`mapActions`展开到`methods`。


## 3、模块化
这部分暂时先不写，就是组建出大型的数据仓库，没有接触过使用场景。
[模块化](https://v3.vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C)

## 4、双向绑定场景

如果将状态使用`v-model`绑定到表单会怎样？在严格模式下会直接报错。因为`state`不允许在`mutation`之外的地方被修改。
> 同时`computed`是只读的，强行赋值报错，但修改是有效的，即最终最作用到`state`上，只是响应式不会起作用。

可以配置`computed`的`set`来达到捕获修改的目的，之后手动触发状态修改：
```js
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```