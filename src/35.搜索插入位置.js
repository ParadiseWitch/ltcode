/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let r = nums.length - 1;
  let l = 0;
  let ans = nums.length;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      r = mid - 1;
    } else{
      l = mid + 1;
    }
  }
  return ans;
};
// @lc code=end

