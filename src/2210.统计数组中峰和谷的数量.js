/*
 * @lc app=leetcode.cn id=2210 lang=javascript
 *
 * [2210] 统计数组中峰和谷的数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  const arr = []
  arr.push(nums[0])
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      arr.push(nums[i])
    }
  }
  let ans = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]) < 0) {
      ans++
    }
  }
  return ans;
};
// @lc code=end

console.log(countHillValley([2, 4, 1, 1, 6, 5]))
console.log(countHillValley([6, 6, 5, 5, 4, 1]))

