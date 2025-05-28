/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 超时
  // return n <= 2 ? n : climbStairs(n - 1) + climbStairs(n - 2);
  if (n == 0) return 1;
  if (n <= 2) return n;
  const left = Math.floor(n / 2);
  return climbStairs(left) * climbStairs(n - left)
    + climbStairs(left - 1) * climbStairs(n - left - 1)
};
// @lc code=end

console.log(climbStairs(44)); // 1134903170
