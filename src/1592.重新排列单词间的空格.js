/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let slen = text.length;
  const words = [];
  text.split(' ').forEach(e => {
    if (e.length > 0) {
      words.push(e);
      slen -= e.length;
    }
  });
  let a = 0;
  if (words.length > 1) {
    a = parseInt(slen / (words.length - 1));
  }
  let b = slen - (words.length - 1) * a;
  return words.join(' '.repeat(a)) + ' '.repeat(b)
};
// @lc code=end

