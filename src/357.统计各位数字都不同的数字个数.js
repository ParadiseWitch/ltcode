/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 统计各位数字都不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (52.33%)
 * Likes:    249
 * Dislikes: 0
 * Total Accepted:    47.7K
 * Total Submissions: 82.2K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10^n^ 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 2
 * 输出：91
 * 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 0
 * 输出：1
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return 10;
  }

  let res = 9;
  for (let i = 0; i < n - 1; i++) {
    res *= 9 - i;
  }

  return res + func(n - 1);
};
// @lc code=end

