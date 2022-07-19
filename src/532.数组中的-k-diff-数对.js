/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const visited = new Set();
  const res = new Set();
  for (const num of nums) {
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    if (visited.has(num + k)) {
      res.add(num);
    }
    visited.add(num);
  }
  return res.size;
};
// @lc code=end

