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
  return res;
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
  return res;
};
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
