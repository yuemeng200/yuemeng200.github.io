# 第 5 章 回溯法

`回溯法`是纯暴力算法，之所以用是因为非用不可，普通的 for 循环无法描述的问题。主要针对以下问题：

- 排列组合
- 子集生成
- 切割问题
- 棋盘问题

关于回溯的特征：

- 所有回溯法都可以抽象为`树形结构`
- 回溯算法用来解决 n 重循环问题
- 回溯函数一般没有返回值
- 回溯树的深度是即原来 for 的层数，节点的宽度表示可选的状态，用 for 循环表示