/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const n = input.length;
  let pos = 0;
  let ans = 0;
  const stack = [];

  while (pos < n) {
    /* 检测当前文件的深度 */
    let depth = 1;
    while (pos < n && input[pos] === '\t') {
      pos++;
      depth++;
    }
    /* 统计当前文件名的长度 */
    let isFile = false;
    let len = 0;
    while (pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true;
      }
      len++;
      pos++;
    }
    /* 跳过当前的换行符 */
    pos++;

    while (stack.length >= depth) {
      stack.pop();
    }
    if (stack.length) {
      len += stack[stack.length - 1] + 1;
    }
    if (isFile) {
      ans = Math.max(ans, len);
    } else {
      stack.push(len);
    }
  }
  return ans;
};
// @lc code=end

