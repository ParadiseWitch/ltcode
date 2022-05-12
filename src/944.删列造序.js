/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const row = strs.length;
  const col = strs[0].length;
  let ans = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (strs[j-1][i] > strs[j][i]) {
        ans++;
        break;
      }
    }
  }
  return ans;
};
// @lc code=end

