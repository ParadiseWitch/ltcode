/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = nums[i];
    let min = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      ans += max - min;
    }
  }
  return ans;
};
// @lc code=end
const main = () => {
  console.log(subArrayRanges([1, 2, 3, 4, 5]));
} 
main();
