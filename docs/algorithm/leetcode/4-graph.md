# 第 4 章 图

在算法问题中，图可以分为两类，分别是`有权图`和`无权图`（固定权值），有权图是最复杂的，题目难度的上限也是最高的。
其中无权图也可以分为两类，分别是`有方向图`和`无方向图`。前者结点的连通关系不给出，但可以通过有限的`方向遍历`来手动判断连通关系，像经典的`二维数组地图`问题（上下左右方向），这种图问题几乎必用`BFS`（最短路、最大范围问题）或者`DFS`（迷宫）。后者会给出所有连接的节点，基本上是和`连通性`相关的问题。

## [433] 最小基因变化

**`BFS`**
求`start`在给定范围内逐字符变化到`end`的最小次数。
这道题本质上就是`有方向图`问题，其中方向有`24`个（每个字符有三种变换方式），显然这又是个最短路问题，所以就用`BFS`。

```js
var minMutation = function (start, end, bank) {
  const cnt = new Set();
  const visited = new Set();
  const keys = ["A", "C", "G", "T"];
  for (const w of bank) {
    cnt.add(w);
  }
  if (start === end) {
    return 0;
  }
  if (!cnt.has(end)) {
    return -1;
  }
  const queue = [start];
  visited.add(start);
  let step = 1;
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift();
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 4; k++) {
          if (keys[k] !== curr[j]) {
            const sb = [...curr];
            sb[j] = keys[k];
            const next = sb.join("");
            if (!visited.has(next) && cnt.has(next)) {
              if (next === end) {
                return step;
              }
              queue.push(next);
              visited.add(next);
            }
          }
        }
      }
    }
    step++;
  }
  return -1;
};
```
