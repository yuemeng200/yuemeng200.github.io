# 第 6 章 动态规划

前面的`数组`章节大部分也是使用动态规划来做的，但主要还是一维的动态规划，这个章节聚焦于更复杂的 dp。

## [42] 接雨水



## [70] 爬楼梯问题

每步爬 1 级台阶或者 2 级台阶，问 n 级楼梯有多少种爬法？
所有爬法分为两类，第一类最后一步爬了 1 级，另一类最后一步爬了 2 级，这是经典的斐波那契数列模型：**f(n)=f(n-1)+f(n-2)**

```js
var climbStairs = function (n) {
  let dp = new Array(n + 1);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

这不是动态规划问题，就是单纯的迭代，我懒得改了，事实上三个变量来回倒腾`n-2`轮就出来了。

## [647] 回文子串

搜索所有回文子串的数量，如果暴力判断任意子串，复杂度为`O(n^3)`，我们注意到对于`s[i]`==`s[j]`，如果`i`到`j`想要是回文串，只需要`i+1`到`j-1`是回文的就可以了，这就是一个递推的过程：

```js
var countSubstrings = function (s) {
  let dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
  let ans = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
          ans++;
        } else {
          if (dp[i + 1][j - 1]) {
            dp[i][j] = true;
            ans++;
          }
        }
      }
    }
  }
  return ans;
};
```

> 注意这里是怎么填充二维数组的，以及遍历的顺序。
