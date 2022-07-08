/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  const pos0Arr = position.filter(p => p % 2 == 0);
  const pos1Arr = position.filter(p => p % 2 == 1);
  return Math.min(pos0Arr.length, pos1Arr.length)
};
// @lc code=end

