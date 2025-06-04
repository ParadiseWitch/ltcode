/*
 * @lc app=leetcode.cn id=2427 lang=javascript
 *
 * [2427] 公因子的数目
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  let count = 0;
  let c = gcd(a, b)
  for(let i = 1; i <= c; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }
  return count
};

var gcd = (a, b) => {
  return b == 0? a: gcd(b, a % b);
}
// @lc code=end

