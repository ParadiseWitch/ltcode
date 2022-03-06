/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  let out = nums[0].toString();
  if(nums.length == 1) return out;
  if(nums.length == 2) return out + '/' + nums[1].toString();

  out += '/(';
  for (let i = 1; i < nums.length; i++) {
    out += nums[i].toString() + '/';
  }

  out = out.slice(0, out.length - 1);
  out +=')';
  return out;
};
// @lc code=end

