# 第 5 章 位操作

## [136] 只出现一次的数字

`抑或`操作本身就满足交换律，天然适合解这个问题。

```js
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
```
