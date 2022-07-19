/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let n = nums.length, ret = 0;
  let prod = 1, i = 0;
  for (let j = 0; j < n; j++) {
    prod *= nums[j];
    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }
    ret += j - i + 1;
  }
  return ret;
};
// @lc code=end

