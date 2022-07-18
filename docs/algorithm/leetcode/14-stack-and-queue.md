# 第 14 章 栈和队列

## [239] 滑动窗口最大值

`hard`
使用单调队列。

- 窗口初始化，此时不产生结果，只构造初始 queue。
- 之后新加入元素看看能否取代前辈的地位（queue 中元素永远处于相同窗口域），注意存入的是 index，为了以后判断越界
- 此时再考虑队头是不是超出窗口范围了（也可以放在前面步骤之前判断，无所谓）
- 输出队头即可

```js
var maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  const q = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }

  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
      q.shift();
    }
    ans.push(nums[q[0]]);
  }
  return ans;
};
```
