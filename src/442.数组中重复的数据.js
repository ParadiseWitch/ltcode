/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const n = nums.length;
  const ans = [];
  for (let i = 0; i < n; ++i) {
    const x = Math.abs(nums[i]);
    if (nums[x - 1] > 0) {
      nums[x - 1] = -nums[x - 1];
    } else {
      ans.push(x);
    }
  }
  return ans;
}
// @lc code=end

