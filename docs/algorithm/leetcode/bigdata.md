# 第 11 章 大数据量

## [398] 随机数索引

```js
var Solution = function (nums) {
  this.nums = nums;
};

Solution.prototype.pick = function (target) {
  let ans = 0;
  for (let i = 0, cnt = 0; i < this.nums.length; ++i) {
    if (this.nums[i] == target) {
      ++cnt; // 第 cnt 次遇到 target
      if (Math.floor(Math.random() * cnt) === 0) {
        ans = i;
      }
    }
  }
  return ans;
};
```
