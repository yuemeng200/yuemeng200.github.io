# 第 9 章 二分查找

## [34] 在排序数组中查找元素的第一个和最后一个位置

还是二分查找，只是 target 可能有多个，所以要找出开始和结束问题，所以这个问题被转化为：**查找第一个不小于 target 的位置**和**查找第一个大于 target 的位置**。所以这种二分查找不会在中途退出，一直会找到最终的极限状态。网上有合并在一起的写法，但我在这里分开写了，同时最后统一处理查找的究竟对不对。

```js
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = getFirst(nums, target);
  const rightIdx = getMore(nums, target) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};

var getFirst = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    // 找个target也不停止，除非找的是第一个target，所以在相等时移动的是右边界
    if (nums[mid] >= target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
var getMore = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    // 确保大于target时逐渐逼近
    if (nums[mid] > target) {
      right = mid - 1;
      ans = mid;
    }
    // 等于时不需要记录结果
    else {
      left = mid + 1;
    }
  }
  return ans;
};
```

## [704] 二分查找

但凡有涉及`有序数组`的问题都要首先考虑二分查找。
一般我喜欢用`闭区间`，所以此时有效条件就是`left<=right`。
还要注意每次只动一个边界。
js 的位运算符优先级低于算术运算符。

```js
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  if (nums[left] > target || nums[right] < target) return -1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};
```
