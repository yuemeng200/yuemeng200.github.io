/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length,
    res = [];
  if (len < 3) return [];
  nums = nums.sort();
  console.log("🚀 ~ file: test.js ~ line 10 ~ threeSum ~ nums", nums);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let L = i + 1,
      R = len - 1;
    while (L < R) {
      if (nums[i] + nums[L] + nums[R] == 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) {
          L++;
        }
        while (L < R && nums[R] == nums[R - 1]) {
          R--;
        }
        L++;
        R--;
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        R--;
      } else {
        L++;
      }
    }
  }
  return res;
};
threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
