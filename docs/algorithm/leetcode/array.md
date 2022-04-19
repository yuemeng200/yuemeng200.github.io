# 第 2 章 数组

> 不用`动态规划`和`二分查找`你就输了。

对于数组使用动态规划，有两类问题。
第一类问题是`连续子串`场景，这种问题最常见的`状态`是：**以当前位置作为结束位置的子串的...**，一般不需要填一维表，一个值就能搞定，当然也可能要同时维护多个值。
第二类是`子序列`场景，子序列不要求连续，状态可以表示为：**截止当前位置的满足要求的子序列...**。事实上非连续子序列问题通常有多个控制变量，类似于背包问题，需要填二维表，是比较复杂的动态规划问题。

## [3] 无重复字符的最长子串

**`中等`**
这个就是第一类动态规划问题，算是第一类中比较难的。
对于每一个位置去看看前面有没有出现过，没有出现过当前长度加 1，出现过就要从`截断的长度`和`上一个位置的长度`中选一个小的作为当前长度（防止截断不充分）。这里的`看一看`操作需要`hash`来管理，值为上次出现的位置。
下面是我最初的解法：
:::detail

```js
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let max = 1;
  let hash = {};
  let lenList = [1];
  hash[s[0]] = 0;
  for (let i = 1; i < s.length; i++) {
    if (hash[s[i]] == undefined) {
      let temp = lenList[i - 1] + 1;
      lenList.push(temp);
      max = max < temp ? temp : max;
      hash[s[i]] = i;
    } else {
      let sub = i - hash[s[i]];
      let temp = sub < lenList[i - 1] ? sub : lenList[i - 1];
      lenList.push(temp);
      hash[s[i]] = i;
      max = max < temp ? temp : max;
    }
  }
  return max;
};
```

:::

这个解法是很冗余的，完全不需要上面的分支判断，也不需要`lenList`，只需要知道上次左边的边界位置就好了。
优化后如下：

> 算了，优化个锤子，有这时间拿来睡觉不好吗？

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

## [119] 杨辉三角

杨辉三角是很简单的 dp 问题，比较有意思的是这里节省空间的策略，当前行依赖上一行的结果，但我这里尽量在同一行操作，要注意哪些量需要保存副本，以及副本使用和更新的时机：

```js
var getRow = function (rowIndex) {
  let res = [1];
  let count = 1;
  while (count <= rowIndex) {
    let last = 1;
    for (let i = 1; i < count; i++) {
      let temp = res[i];
      res[i] = last + res[i];
      last = temp;
    }
    res[count++] = 1;
  }
  return res;
};
```

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

<!-- ## [171] Excel 表列序号 -->

## [448] 找到所有数组中消失的数字

给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
这个显然用 hash，时间复杂度为`O(1)`。又因为数字有范围，可以用 hash 数组，而数字范围又恰恰不超出原数组范围，所以可以直接原地，空间复杂度`O(1)`。原地时用`num[i]`表征`i`的状态，但要注意又不能破坏本身的数据，所以使用 abs 或者取余是最好的方式。

> 事实上这里我用`nums[i-1]`来表征的`i`，一个字节都不浪费。

```js
var findDisappearedNumbers = function (nums) {
  for (let num of nums) {
    let pos = Math.abs(num) - 1;
    if (nums[pos] > 0) nums[pos] = -nums[pos];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
```
