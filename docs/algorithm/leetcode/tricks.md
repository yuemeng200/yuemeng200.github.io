# 奇技淫巧

## [136] 只出现一次的数字

**比特运算**
`异或`操作本身就满足交换律，天然适合解这个问题。

```js
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
```

## [169] 多数元素

找出给定数组中出现次数`超出一半`的元素。
最先想到的是`hash`法，hash 是通用的，但题目限制为找出过半的元素，可以使用摩尔投票法：

```js
var majorityElement = function (nums) {
  let vote = null;
  let num = 1;
  for (let ticket of nums) {
    if (ticket == vote) {
      num++;
    } else {
      num--;
      if (num == 0) {
        vote = ticket;
        num++;
      }
    }
  }
  return vote;
};
```

> 劳资就是票多，一个人干你们所有。

## [172] 阶乘后的零

乘法运算中，末尾的零是由`2x5`贡献的，而 2 的数量显然要多余 5，所有因数中所有能分解出的 5 的数量就是结果中末尾 0 的数量。
且所有能分解出 5 的数值中，分解出 5 的数量随指数倍递增：

```js
var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    let temp = Math.floor(n / 5);
    count += temp;
    n = temp;
  }
  return count;
};
```
