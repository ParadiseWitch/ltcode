/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split('');
  const q = []
  for (let i = 0; i < arr.length; i++) {
    const ss = arr[i]
    if (ss == '(' || ss == '[' || ss == '{') {
      q.push(ss)
    } else if (ss == ')') {
      if (q.pop() != '(') {
        return false;
      }
    } else if (ss == ']') {
      if (q.pop() != '[') {
        return false;
      }
    } else if (ss == '}') {
      if (q.pop() != '{') {
        return false;
      }
    }
  }
  return q.length == 0;
};
// @lc code=end


console.log(isValid('(([]){})'))

