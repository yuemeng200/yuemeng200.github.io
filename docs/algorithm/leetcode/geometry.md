# 第 10 章 图形几何

## [587] 安装栅栏

求平面`点集`的`凸包`问题。
格雷厄姆扫描算法：通过对所有点进行扫描排序（平面任意点的`角排序`），之后取任一`边点`作为起点，按照顺序依次入栈下一个顺序点，当向量`叉积`为负时（点在向量右侧）栈顶元素出栈，依次进行。

> 排序时遇到角度相同时，按照距离排序，比较特殊的是末尾角度相同的那批元素应该按照逆序排序（可以画图感受下），可以在最后处理下。
> [视频讲解](https://www.bilibili.com/video/BV1v741197YM?spm_id_from=333.337.search-card.all.click)

> 还有一个比较有意思的问题，当角排序的参照点选在点集区域之外时，上面的一次扫描过程只能找到一半的凸包点，之后必须再回头来一趟才能找到另一半。那么如果参照点选在无穷远处呢？假设在 y 轴方向上的的无穷远处，此时点的排序的指标会收缩为对 x 坐标的完全依赖，x 就能唯一确定点的扫描顺序，无需再求角度了。当然此时也是要扫描两趟才行。

:::detail

```js
var outerTrees = function (trees) {
  const n = trees.length;
  if (n < 4) {
    return trees;
  }
  let bottom = 0;
  /* 找到 y 最小的点 bottom*/
  for (let i = 0; i < n; i++) {
    if (trees[i][1] < trees[bottom][1]) {
      bottom = i;
    }
  }
  trees = swap(trees, bottom, 0);
  /* 以 bottom 原点，按照极坐标的角度大小进行排序 */
  trees.sort((a, b) => {
    let diff = cross(trees[0], a, b) - cross(trees[0], b, a);
    return diff === 0
      ? distance(trees[0], a) - distance(trees[0], b)
      : diff > 0
      ? 1
      : -1;
  });
  /* 对于凸包最后且在同一条直线的元素按照距离从小到大进行排序 */
  let r = n - 1;
  while (r >= 0 && cross(trees[0], trees[n - 1], trees[r]) === 0) {
    r--;
  }
  for (let l = r + 1, h = n - 1; l < h; l++, h--) {
    trees = swap(trees, l, h);
  }
  const stack = [trees[0], trees[1]];
  for (let i = 2; i < n; i++) {
    let top = stack.pop();
    /* 如果当前元素与栈顶的两个元素构成的向量顺时针旋转，则弹出栈顶元素 */
    while (cross(stack[stack.length - 1], top, trees[i]) > 0) {
      top = stack.pop();
    }
    stack.push(top);
    stack.push(trees[i]);
  }
  return stack;
};

const cross = (p, q, r) => {
  return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
};

const distance = (p, q) => {
  return (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
};

const swap = (trees, i, j) => {
  let temp0 = trees[i][0],
    temp1 = trees[i][1];
  trees[i][0] = trees[j][0];
  trees[i][1] = trees[j][1];
  trees[j][0] = temp0;
  trees[j][1] = temp1;
  return trees;
};
```

:::
