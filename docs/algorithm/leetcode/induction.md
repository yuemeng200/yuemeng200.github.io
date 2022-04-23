# 第 8 章 数学归纳

## [233] 数字 1 的个数

求 1~n 中所有数字中出现 1 的总数。
这里的解法是分别求每一数位上出现的 1 的总数，时间复杂度为`O(logn)`，确实不比较牛逼。
在求每一位上出现的 1 时，主要看前缀和后缀能有多少种组合，假设某位的前缀最大为`max_prefix`，那么小于`max_prefix`的前缀一共能提供`Math.pow(10, next)`个 1（next 为当前后缀位数），等于`max_prefix`能提供的 1 的个数和当前位置的数值有关，是 0 就不用说了，是 1 那就是后缀表示数值加 1，大于 1 时说明后缀可以随便表示了。之后加在一起即可。

> 注意我这种方法在求`prefix`和`suffix`时，有个`parseInt('')`的操作，尽管不会报错，但表示的值是错的。
> [参考](https://leetcode-cn.com/problems/number-of-digit-one/solution/gong-shui-san-xie-jiang-shu-wei-dp-wen-t-c9oi/)

```js
var countDigitOne = function (n) {
  let s = n.toString();
  let len = s.length;
  if (len == 1) return n > 0 ? 1 : 0;
  let prefix = Array(len),
    suffix = Array(len);
  for (let i = 0; i < len; i++) {
    prefix[i] = parseInt(s.substring(0, i));
    suffix[i] = parseInt(s.substring(i + 1));
  }
  prefix[0] = 0;
  suffix[len - 1] = 0;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    let value = parseInt(s[i]),
      next = len - i - 1;
    let temp = 0;
    temp += prefix[i] * Math.pow(10, next);
    if (value == 0) {
    } else if (value == 1) {
      temp += suffix[i] + 1;
    } else {
      temp += Math.pow(10, next);
    }
    ans += temp;
  }
  return ans;
};
```
