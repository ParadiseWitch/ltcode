/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};
// @lc code=end

