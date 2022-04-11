# 第 2 章 数组

> 不用`动态规划`和`二分查找`你就输了。

## [52] 最大连续子数组和

这是道经典的`动态规划`问题，动态规划就是遍历数组填表的过程，表的下一项内容依赖前一项。
这里表里填的是**以当前位置作为结束位置的最大连续数组的和**，注意一定是作为结束位置的，如果不结束根本就用不了动态规划，因为不连续状态无法迁移。不断更新这个值，找出最大的即可。这种解法是完备的，因为最有解无论如何都要以一个元素结束。
而当前的最大和主要看`lastSum`值不值得使用，是正数的话就用，为负就都掐掉。

```js
var maxSubArray = function (nums) {
  let ans = nums[0];
  let lastSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (lastSum < 0) lastSum = nums[i];
    else lastSum += nums[i];
    ans = Math.max(ans, lastSum);
  }
  return ans;
};
```

> 动态规划剔除掉了显然啰嗦的状态空间，只使用可迁移的、完备的状态空间。十分美妙。

## [121] 买卖股票的最佳时机

本质上就是个最大波幅问题，状态应该表示为`在此时卖出的最大收益`，题解里同时给出了`截止此时的最大收益`。

```js
var maxProfit = function (prices) {
  let res = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(res, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return res;
};
```
