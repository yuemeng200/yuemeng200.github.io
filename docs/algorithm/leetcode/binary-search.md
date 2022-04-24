# 第 9 章 二分查找

## [4] 寻找两个正序数组的中位数

**hard**

[题解](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/)

```py
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        def getKthElement(k):
            index1, index2 = 0, 0
            while True:
                # 特殊情况
                if index1 == m:
                    return nums2[index2 + k - 1]
                if index2 == n:
                    return nums1[index1 + k - 1]
                if k == 1:
                    return min(nums1[index1], nums2[index2])

                # 正常情况
                newIndex1 = min(index1 + k // 2 - 1, m - 1)
                newIndex2 = min(index2 + k // 2 - 1, n - 1)
                pivot1, pivot2 = nums1[newIndex1], nums2[newIndex2]
                if pivot1 <= pivot2:
                    k -= newIndex1 - index1 + 1
                    index1 = newIndex1 + 1
                else:
                    k -= newIndex2 - index2 + 1
                    index2 = newIndex2 + 1

        m, n = len(nums1), len(nums2)
        totalLength = m + n
        if totalLength % 2 == 1:
            return getKthElement((totalLength + 1) // 2)
        else:
            return (getKthElement(totalLength // 2) + getKthElement(totalLength // 2 + 1)) / 2
```

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
