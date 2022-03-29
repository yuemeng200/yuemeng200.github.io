# 第 8 章 vue3

## 1、概览

### (1) 优化

速度更快：

- 重写了虚拟 dom 的实现
- 模板编译优化
- 更高效的组件初始化
- update 性能提升
- SSR 速度提升

打包更小：

- 使用 webpack 的 tree-shaking

更易维护：

- options API
- 逻辑组合与复用
- 配合其他框架
- 更好的 ts 支持

开放更多底层功能：

- 自定义渲染 API
- 暴露响应式 API

### (2) 新特性

- framents：支持多根节点
- teleport：组件任意门
- createRenderer：构建自定义渲染器
- composition：逻辑组合、复用和管理

### (3) 非兼容更改

### (4) 移除

- `$on`、`$once`和`$off`实例方法
- 过滤器
- `$destroy`

## 2、新特性

### (1) 组合式API