/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (35.72%)
 * Likes:    1563
 * Dislikes: 0
 * Total Accepted:    208.5K
 * Total Submissions: 583.3K
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s[i] 为 '(' 或 ')'
 * 
 * 
 * 
 * 
 */

/**
 * ❌ 暴力解法会超时 
 * ✔ 使用DP解法
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = Array(s.length).fill(0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == ")") {
      if (s[i - 1] == "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      }
      else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == "(") {
        dp[i] = dp[i - 1] + 2 + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0);
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
// @lc code=end

const main = () => {
  console.log(longestValidParentheses(')()())'));
}

main();

