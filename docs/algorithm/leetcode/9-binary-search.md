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

## [153] 寻找旋转排序数组中的最小值

`medium`

对`无重复元素`有序数组旋转，相当于把后面的片段挪到前面来。最小值就在有序性突变处。
使用二分查找会把当前数组隔断为两部分，最小值一定在不单调的那一半。直到所查找的数组本身单调了，最小值就是最左侧的元素了。
注意每次找到不连续的区间，最左侧元素肯定不是最小值，最右侧的可能是，这就是为什么判断分支后对`left`和`right`的操作不同。

```js
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (true) {
    if (nums[left] <= nums[right]) return nums[left];
    let mid = left + ((right - left) >> 1);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      left++; // 这里也是个小优化
      right = mid;
    }
  }
};
```

我上面的写法虽然是做了一些优化，可以在有序时立即停止，但这种写法容易写出问题，还是按照二分的模板来写比较稳妥：

```js
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];
};
```

## [154] 寻找旋转排序数组中的最小值 II

这个和上面差不多，就是数组元素可能有重复的。
注意此时可能会碰到`nums[pivot]==nums[high]`的情景，此时是无法判断边界点是在哪边的（甚至根本没有边界点），只有通过线性方式缩小当前状态。

```js
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else if (nums[pivot] > nums[high]) {
      low = pivot + 1;
    } else {
      high -= 1; // 线性收缩
    }
  }
  return nums[low];
};
```

## [704] 二分查找

但凡有涉及`有序数组`的问题都要首先考虑二分查找。
一般我喜欢用`闭区间`，所以此时有效条件就是`left<=right`。
还要注意每次只动一个边界。

> js 的位运算符优先级低于算术运算符。

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
