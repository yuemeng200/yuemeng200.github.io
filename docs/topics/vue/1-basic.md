# 第 1 章 基础知识

> 准确地说这完全算不上一份标准的入门教程，只是对其中比较关键的和容易出错的内容进行解释。需要查看详尽文档请移步[vue 官方文档](https://cn.vuejs.org/v2/guide/)

## 1、语言规范

总结`vue`的基本语法规则能减少写出常见的 bug 以及快速与其他框架相区分。

- 在`template`中使用`vm`实例上的内容不需要`this`，在`script`中需要。原因是模板有个预编译的过程，脚本不会预处理。
- vue 的指令为`v-directive="value"`或者`v-directive:argument="value"`的格式。
- 标签的属性中使用变量时必须用`v-bind`，值的最外层引号是语法规定，不是字符意义的引号。
- data 是个函数，不是对象。
- 不要给实例选项传递箭头函数。不然其中使用的的 this 不指向实例对象。
- vue 响应式只包含实例创建时就存在的数据及其属性。
- `props`应该只传递基本信息，复杂信息在子组件`created`钩子中获取。

## 2、指令

### (1) 基本指令

- v-if
- v-for
- v-model
- v-show
- v-html
- v-bind
- v-on
- v-text
- v-slot
- v-pre
- v-cloak
- v-once

### (2) 说明

- v-bind:[动态参数]="value"可用。
- v-on:<动作>.<修饰符>可用。
- `v-if`直接控制 dom 元素是否被生成，而`v-show`只是控制`display`属性让其不渲染，dom 树中还是存在的。当需要频繁控制显示和隐藏时用`v-show`，其生命周期会触发。
  > 而`visibility: hidden`相当于透明显示。
- vue 会尽量高效地复用元素，可以给元素声明不同的`key`来强制替换。可以使用改变`key`的方式强制重新加载元素。
- `v-for`的标准格式：` <li v-for="(item, index) in items" :key="item.key"></li>`，也适用于遍历对象，但注意不要拿 index 当 key 来用。
- 我们可能会需要有选择地使用`v-for`内容，不要把`v-if`与之写在同一元素上，使用`template`，生成的代码中不会包含该元素
- `v-on`会自动给回调方法传递`$event`，用来访问原始的`dom事件`。

### (3) 修饰符

#### ① 表单修饰符

`v-model`修饰符：

- `.lazy`：使得`视图->状态`的同步在`change`时而不是`input`时触发。

- `.number`：使得输入转化为数值来同步。

- `.trim`：使得自动过滤输入的首尾空白字符。

#### ② 事件修饰符

- `stop`：阻止事件冒泡（传播）。
- `prevent`：阻止默认行为。
- self：只在 event.target 是自身时触发。
- once：事件只触发一次。
- capture：事件响应从冒泡改为捕获。
- passive：相当于对`onscroll`事件节流处理。
- native：监听组件原生事件，默认监听自定义事件。（已移除）
  > Vue2.x 中为了监听自定义组件的原生事件，我们使用`.native`修饰。这在 Vue3.x 中已经[移除](https://v3.cn.vuejs.org/guide/migration/v-on-native-modifier-removed.html#_3-x-%E8%AF%AD%E6%B3%95)，所有没在`emits`选项中声明的事件同样被视为原生事件处理（除非开启了 `inheritAttrs: false`，此时拒绝接收一切未指定的内容）

#### ③ 按键事件修饰符

修饰`click`鼠标事件：

- left
- right
- middle
  修饰`key`按键事件：
- keyup.enter
- keydown.esc
- ...

### (4) 自定义指令

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  },
});
```

除此之外，也能通过`directives`选项定义局部指令。

## 3、事件

使用`v-on`可以在组件上，注意默认会传递`$event`给处理方法，只需要占位获取即可。
同时还有其他几种手动处理的实例属性：

- `$on`：用来手动绑定事件
- `$once`：绑定事件一次
- `$off`：解除绑定

考虑如下一个场景，我们需要在组件摧毁前释放第三方库对象：
可以直接在生命周期钩子执行，但此时的缺点是必须把临时使用的对象挂载到`data`。

```js
// 一次性将这个日期选择器附加到一个输入框上
// 它会被挂载到 DOM 上。
mounted: function () {
  // Pikaday 是一个第三方日期选择器的库
  this.picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })
},
// 在组件被销毁之前，
// 也销毁这个日期选择器。
beforeDestroy: function () {
  this.picker.destroy()
}
```

这时候就可以使用`$once`来解决：

```js
mounted: function () {
  var picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })

  this.$once('hook:beforeDestroy', function () {
    picker.destroy()
  })
}
```

还有注册和清除定时器的场景：

```js
mounted(){
  const timer = setInterval(()=>{}, 1000);
  this.$once('hook:beforeDestroy',()=>{
    clearInterval(timer);
  })
}
```

## 5、computed 和 watch

因为在模板中写表达式难以维护和复用，且 vue 本身不支持复杂的插值运算。此时可以借助`method`来实现，但性能上还是计算属性更好些，因为**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。

> 如果该计算属性依赖的内容不是响应式依赖，则不会自动触发更新计算操作，如`Date.now()`等。

而`watch`是的功能在于监听。

:warning: 注意`watch`默认无法深度监听，只有监听的对象重新赋值才会触发，可以手动开启深度监听：

```js
watch: {
    data: {
        handler: function(newVal, oldVal){
            ...
        },
        deep: true
    },
}
```

> 当被监听的对象被修改时，深度监听会起作用，但是却无法获取`oldVal`，一种可行的方案是把监听的对象序列化为`computed`，再去监听该`computed`，可参考[这篇文章](https://blog.csdn.net/qq_35859392/article/details/107552326)。

## 6、组件

### (1) 组件注册和使用

全局注册使用`Vue.component('my-component-name', {})`，注意一定在实例创建前就注册。局部注册使用`components`选项。

> 当使用`PascalCase`注册一个组件名时，可以使用`PascalCase`和`kebab-case`两种方式在模板中引用组件。关于在模板传递`props`时，官方网站说只能用`kebab-case`，但我用`camelCased`也没发现问题，这点暂时存疑。

:::warning
要注意区分`注册组件名`、`定义组件名`和`路由别名`。定义组件名在使用`vue-devtool`调试时显示，`路由别名`用于快捷路由快捷引用。
:::

补充一个目录下组件全局注册的的方案：

```js
import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // 其组件目录的相对路径
  "./components",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
```

### (2) 组件通信

#### props 和 $emit

一般情况下，父->子 使用`props`，子->父 使用`$emit`和`$on`。不同数据类型的传递方式符合函数传参规则。

`props`传递的数据不建议在子组件中修改，可以使用`.sync`修饰，其相当于`bind`、`on`和`emit`流程的语法糖：

```html
//父组件
<comp :myMessage.sync="bar"></comp>
//子组件 this.$emit('update:myMessage',params);
```

> 注意这种时候 bind 后面不能写表达式，触发事件严格按照`update:eventName`的格式。

#### 特殊变量

使用`$root`访问根实例，使用`$parent`访问父组件，使用`$childen`访问子组件列表，使用`$refs.name`访问指定子元素。

> :warning: `$refs`不支持响应式。

#### 依赖注入

`provide`和`inject`选项。

```js
// 祖先组件
provide: function () {
  return {
    getMap: this.getMap
  }
}

// 孩子组件
inject: ['getMap']
```

> 不支持响应式

#### attrs 和 $listener

当非`props`被声明在子组件上时，默认情况下这些属性将作为`dom属性`作用到子组件的根元素上，并会替换已有的属性（class 和 style 采取合并策略）。可以开启`inheritAttrs: false`选项阻止这种可能的破坏。此时传递的属性在子组件中可以通过`this.$attrs`获取。
显然这又是一种组件通信的方式，而且是多层次的，因为子组件还能通过`v-bind:$attrs`再传递给孙子组件。从而实现了从祖先到孩子的数据传递。
那么从孩子到祖先的通信该怎么实现呢？有个`$listeners`实例属性，其中保存有所有的父组件的监听器。通过在中间组件使用`v-on:$listener`中转祖先组件的监听器，就能在任意孩子组件中使用`$emit`直接触发。
可见这种方式是对多层级的`props`、`$emit`通信模式的简化，从效果上来看，实现的是**祖先元素和所有子孙元素间**的通信。

#### EventBus

实质上 EventBus 是一个不具备 DOM 的组件，它具有的仅仅只是它实例方法。

```js
// 全局注册
Vue.prototype.$EventBus = new Vue();

// 发送
this.$EventBus.$emit("onMsg", data);

// 接收
this.$EventBus.$on("onMsg", () => {});
```

> 之所以可以这样用的原因是因为`$emit`是在调用实例身上触发事件。

### (3) 插槽

合理地拆分组件和用好插槽复用代码的关键。
在子组件中使用`<slot>`标签声明默认插槽，提供`name`属性声明具名插槽。

#### 具名插槽

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

> 没有使用`v-slot`指令的内容占位默认插槽，其中`v-slot:`可简写为`#`。

#### 作用域插槽

插槽的填充内容默认无法访问子组件作用域的内容。
可以通过给`slot`标签使用`v-bind`指令向外暴露内容，之后父组件的填充内容使用对象来接收：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

也可以使用更简洁的解构和重命名方式：

```html
<current-user>
  <template v-slot:default="{user: person}"> {{ person.firstName }} </template>
</current-user>
```

### (4) 动态组件

```html
<component v-bind:is="currentTabComponent"></component>
```

> 这其实是`v-if-else`的一种语法糖。
> 同理还有`v-show`的语法糖：

```html
<!-- 此时失活的组件状态将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

使用`keep-alive`后，内置组件会多出来两个生命周期：`activate`和`deactivate`。缓存的组件实例会被放在全局的`this.cache`中。

### (5) 递归组件

实现起来并不难，组件自己调用自己即可，注意这种情况下组件的`name`不可省略。标签名不能用`驼峰命名`而应该用`连接线`，标签属性要用`纯小写`，据说这是`W3C`的规范，但试了一下并没有影响。

### (6) 混入

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

```js
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log("hello from mixin!");
    },
  },
};

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin],
});

var component = new Component(); // => "hello from mixin!"
```

> `Vue.extend`用来定义 Vue 子类，声明的组件对象需要使用`el`选项或者`$mount`挂载到 dom 上使用，只是一种动态生成组件的方式，很多`message`组件就是这样生成的。
> 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

除此之外还能使用`Vue.mixin()`全局混入。

```vue
<template>
  <div>
    <div class="title">
      {{ data.name }}
    </div>
    <div class="children" v-if="data.children">
      <detailed-list
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      ></detailed-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedList",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.children {
  padding: 0 20px;
}
</style>
```

## 7、class 和 style

`class`和`style`作为标签的属性，自然能够被`v-bind`修饰，但字符串拼接太麻烦，vue 专门增强了这种功能。

### (1) 绑定 class

`对象语法`用于动态添加和移除，`数组语法`用于动态切换。

#### 对象语法

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

> 此时`isActive`变量决定`active`这个 class 的添加。

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

> 此时`errorClass`的 class 值会被添加到标签上。

### (2) 绑定内联 style

#### 对象语法

CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名。注意原生内联写法相区分。

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

#### 数组语法

数组语法可以将多个样式对象应用到同一个元素上

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

## 8、过渡 & 动画 vue

提供了`transition`封装组件，这个相当于`vue`给组件使用 css
动效提供了一种更简单、强大的方式。 触发时机： - v-if - v-show - 动态组件 -
组件根节点 有一个常用的场景是`router-view`过渡使用，在 `vue2` 可以这样写：

```html
<transition :name="transitionName">
  <router-view class="router-view" :key="$route.name"> </router-view>
</transition>
```

注意要带上`key`，不然可能会失效，然后通过路由守卫可以动态地改变`transition`的`name`，达到多样化的过渡效果。
但在`vue3`这种方式不再支持了，要采用下面这种写法：

```html
<router-view class="router-view" v-slot="{ Component }">
  <transition :name="transitionName">
    <component :is="Component" />
  </transition>
</router-view>
```

其实就是把从检测`router-view`移动到检测内部组件了，所以要把内部组件暴露到`component`身上去。

## 9、补充

### (1) 开发插件

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

`Vue.use()`会自动执行插件对象的`install`方法。

## 问题

### (1) 为什么 data 非要是函数不可？

首先说明，`根vue实例`的 data 是可以直接写成一般对象的，因为根只存在一个，不会复用，而组件是会被复用的。为什么被复用就不行呢？原因如下：

这和 vue 实例被创建的过程有关，vue 实例初始化后会把代码中`data`的内容作为属性添加到`vm`上，之后也会把函数之类的内容添加进来，所以我们才能通过`this.属性`的形式访问到。如果写成对象的形式，相同组件在多个位置使用会共享`data`，因为对象是`引用类型`，每次被挂载还是原来对象的引用。

### (2) v-model 的实现机制？

`v-model`双向绑定是 vue 的语法糖，可以通过`v-bind`和`v-on`联合实现（指视图->数据方向）：

```vue
<input v-model="searchText">
```

等价于：

```vue
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

> `v-on`的值既能是`method`的名字，也能是单条语句，甚至是简单的箭头函数。

除此之外，自定义输入框组件也支持使用`v-model`语法糖，但需要在定义时就满足上述规则：

```js
Vue.component("custom-input", {
  props: ["value"],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `,
});
```

再者我们还能修改`v-model`默认的行为，这对使用`select`、`radio`、`checkbox`等控件时有用：

```js
Vue.component("base-checkbox", {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `,
});
```
