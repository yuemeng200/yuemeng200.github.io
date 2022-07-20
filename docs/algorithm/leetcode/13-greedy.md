# 第 13 章 贪心

局部最优推出整体最优

## [376] 摆动序列

移除最少的元素使原序列摆动。
原则就是使每次留下的尽可能有大的起伏。

```js
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;
  let result = 1;
  let preDiff = 0;
  let curDiff = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      result++;
      preDiff = curDiff;
    }
  }
  return result;
};
```

## [53] 最大子数组和

这个问题乍看是动态规划的解法，实则是贪心。

```js
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let ret = -Infinity,
    sum = 0;
  for (let num of nums) {
    sum += num;
    // 注意要先判断这个，因为子串长度至少为1
    if (sum > ret) ret = sum;
    if (sum < 0) sum = 0;
  }
  return ret;
};
```

## [121] 买卖股票的最佳时机

这个是最简单的股票买卖问题，只能单次操作。所以和前面的问题一样。
值得注意的是几乎所有这类问题也是同样可以通过动态规划来解的。但有时候贪心更简单。

```js
var maxProfit = function (prices) {
  let ret = 0,
    sum = 0;
  for (let i = 1; i < prices.length; i++) {
    let get = prices[i] - prices[i - 1];
    sum += get;
    if (sum < 0) sum = 0;
    if (sum > ret) ret = sum;
  }
  return ret;
};
```

## [122] 买卖股票的最佳时机 II

这个每天只能进行买或者卖操作，所以最优的方案收集所有的最小递增区间。其实就是收集出所有的正利润。

```js
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0);
  }
  return result;
};
```

## [714] 买卖股票的最佳时机含手续费

我们还从所有最小递增区间考虑，如果利润大于手续费，可以收集，如果有利润但是没有手续费高，也要收集，到能抵得了手续费时一块收集。这道题模拟起来简单，但写起来并不容易。

```js
var maxProfit = function (prices, fee) {
  let result = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue;
    }
    if (prices[i] > minPrice + fee) {
      result += prices[i] - minPrice - fee;
      minPrice = prices[i] - fee; // 重点！！！
    }
  }
  return result;
};
```

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

## [45] 跳跃游戏 II

```js
var jump = function (nums) {
  let len = nums.length,
    end = 0, // 当前step结束位置
    border = 0, // 当前最大边界
    step = 0;
  for (let i = 0; i < len - 1; i++) {
    let temp = i + nums[i];
    if (temp > border) {
      border = temp;
      // 可触及终点
      if (border >= len - 1) return step + 1;
    }
    // 当前step结束
    if (i === end) {
      step++;
      end = border;
    }
  }
  return step;
};
```

## [134] 加油站

当整体能跑完，若干段跑不完，把剩下的那一段一定能跑完，且从那里起始能跑完全程。

```js
var canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length;
  let start = 0;
  let curSum = 0; // 当前段
  let totalSum = 0; // 全程
  for (let i = 0; i < gasLen; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  if (totalSum < 0) return -1;
  return start;
};
```

## [135] 分发糖果

两个条件：

- 每个孩子至少分配到 1 个糖果。
- 相邻两个孩子评分更高的孩子会获得更多的糖果。

只要满足这俩条件就行，相邻评分相同的爱怎么分怎么分。（事实上正是这个条件增加了题目的难度，导致不能用模拟法直接解）

第二个条件可以分为，相邻的右边大于左边时分更多糖果和相邻的左边大于右边时分更多糖果，这俩条件和原条件等价。可以很容易写出来分别满足这两个条件的分配方案。之后每个位置都取最大即可。
为啥取最大的就可以呢？首先我们刨除所有的相邻相等元素不看，因为这种相对关系是任意的。剩下的在任一方案中的递增递减序列在另一个序列中必然是恒等的 1，**把恒等 1 的系列改成对应的序列并不会影响原序列的关系**。

```js
var candy = function (ratings) {
  const n = ratings.length;
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  let right = 0,
    ret = 0;
  for (let i = n - 1; i > -1; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    ret += Math.max(left[i], right);
  }
  return ret;
};
```

## [406] 根据身高重建队列

和前面的分糖果一样，也是两个维度的问题，这样的问题都是要先确定一个维度。这里根据身高从高到低排好序，相等的按 k 从小到大排。之后一次执行插入即可，其实排序就是为插入服务的，确保每一个都能插入到准确的位置上，因为后续比其小的元素并不会影响其 k 的次序。

```js
var reconstructQueue = function (people) {
  let queue = [];
  people.sort((a, b) => {
    if (b[0] !== a[0]) return b[0] - a[0];
    else return a[1] - b[1];
  });
  for (let i = 0; i < people.length; i++)
    queue.splice(people[i][1], 0, people[i]);
  return queue;
};
```

## [452] 用最少数量的箭引爆气球

这个和某一个安排时间表的问题一样。
先根据起始位置排下去，依次遍历，如何前后没交集就需要一支箭，有交集的话为了省下箭要把范围缩小下（实际上只缩小右边界即可）

```js
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      result++;
    } else {
      points[i][1] = Math.min(points[i - 1][1], points[i][1]);
    }
  }
  return result;
};
```

## [435] 无重叠区间

```js
var eraseOverlapIntervals = function (intervals) {
  // 按照左边界升序排列
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let end = intervals[intervals.length - 1][0];
  // 倒序遍历，对单个区间来说，左边界越大越好，因为给前面区间的空间越大
  for (let i = intervals.length - 2; i >= 0; i--) {
    if (intervals[i][1] <= end) {
      count++;
      end = intervals[i][0];
    }
  }
  // count 记录的是最大非重复区间的个数
  return intervals.length - count;
};
```

## [763] 划分字母区间

```js
var partitionLabels = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }
  let result = [];
  let left = 0;
  let right = 0; // right 记录当前片段包含元素的最右边界
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
};
```

## [738] 单调递增的数字

```js
var monotoneIncreasingDigits = function (n) {
  const strN = n
    .toString()
    .split("")
    .map((v) => +v);
  let i = 1;
  // 定位不满足要求的位置
  while (i < strN.length && strN[i - 1] <= strN[i]) i++;
  // 存在该位置时
  if (i < strN.length) {
    // 此时需要修正之前的位置，以及修正后不满足要求的位置
    while (i > 0 && strN[i - 1] > strN[i]) {
      strN[i - 1] -= 1;
      i -= 1;
    }
    // 最前面被修正的数位之后的所有数位都给9
    for (i += 1; i < strN.length; ++i) {
      strN[i] = 9;
    }
  }
  return parseInt(strN.join(""));
};
```
