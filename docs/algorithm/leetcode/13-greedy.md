# 第 13 章 贪心

局部最优推出整体最优

## [942] 增减字符串匹配

给出给定长度和范围的数组的升降关系，构造出原数组。
你要增加，我就给当前最小的。你要减小，我就给当前最大的。非常经典的贪心思想。

```js
var diStringMatch = function (s) {
  let n = s.length,
    lo = 0,
    hi = n;
  const perm = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    perm[i] = s[i] === "I" ? lo++ : hi--;
  }
  perm[n] = lo; // 最后剩下一个数，此时 lo == hi
  return perm;
};
```
