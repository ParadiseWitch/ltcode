/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let stack = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    if (curChar == '(') stack++;
    if (curChar == ')') {
      ans = Math.max(ans, stack);
      stack --;
    }
  }
  return ans
};
// @lc code=end

