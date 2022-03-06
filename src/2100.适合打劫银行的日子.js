/*
 * @lc app=leetcode.cn id=2100 lang=javascript
 *
 * [2100] 适合打劫银行的日子
 */

// @lc code=start
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const n = security.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }
  const ans = [];
  for (let i = time; i < n -time; i++) {
    if (left[i] >= time && right[i] >= time) {
      ans.push(i);
    }
  }
  return ans;
};
// @lc code=ends
const main = () => {
  console.log(goodDaysToRobBank([1, 2, 3, 4], 1));
}
main();