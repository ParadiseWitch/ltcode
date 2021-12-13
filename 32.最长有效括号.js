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
 * ❓ 使用DP解法
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const n = s.length;
  let ant = 0;
  let i = 0;
  while (i <= n-1) {
    let j = i + 1;
    while (j <= n - 1) {
      if (isValid(s.substring(i, j + 1))) {
        ant = Math.max(ant, j - i + 1);
      }
      j++;
    }
    i++;
  }
  return ant;

};
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '(']
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    }
    else {
      stk.push(ch);
    }
  };
  return !stk.length;
};
// @lc code=end

const main = () => {
  console.log(longestValidParentheses(')()())'));
}

main();

