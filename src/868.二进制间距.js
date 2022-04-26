/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let last = -1, ans = 0;
  for (let i = 0; n != 0; ++i) {
    if ((n & 1) === 1) {
      if (last !== -1) {
        ans = Math.max(ans, i - last);
      }
      last = i;
    }
    n >>= 1;
  }
  return ans;
};
// @lc code=end

