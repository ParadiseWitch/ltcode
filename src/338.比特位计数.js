/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = []
  for (let i = 0; i <= n; i++) {
    ans.push(countOne(i)) // 计算每个数字的1的个数
  }
  return ans
};

var countOne = function (n) {
  let count = 0
  while (n) {
    n = n & (n - 1) // 清除最低位的1
    count++
  }
  return count
}
// @lc code=end

