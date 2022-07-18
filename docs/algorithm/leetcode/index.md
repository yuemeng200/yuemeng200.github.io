# leetcode 题解

## Javascript 常用小技巧

### 复制数组（浅拷贝）

- Array.from(oldArray)
- [...oldArray]
- oldArray.slice()

### 向下取整中值

- (low + high)>>1

### 解析数值

- parseInt(s)
- +s

### 二维数组

- Array.from(Array(n), ()=>Array(n).fill(0))
  > 注意，`map()`干不好这件事，空元素无法进入map
