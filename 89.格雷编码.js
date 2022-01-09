/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const dp = [[], [0, 1]];
  for (let i = 2; i <= n; i++) {
    const pre = dp[i - 1];
    const rev = [...dp[i - 1]].reverse().map(n => n + 2 ** (i-1));
    dp[i] = [...pre, ...rev];
  }
  return dp[n];
};
// @lc code=end

const main = () => {
  console.log(grayCode(4).map(n => n.toString(2)));
}
main();