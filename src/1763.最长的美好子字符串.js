/*
 * @lc app=leetcode.cn id=1763 lang=javascript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  const n = s.length;
  let maxPos = 0;
  let maxLen = 0;
  for (let i = 0; i < n; ++i) {
    let lower = 0;
    let upper = 0;
    for (let j = i; j < n; ++j) {
      if ('a' <= s[j] && s[j] <= 'z') {
        lower |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt());
      } else {
        upper |= 1 << (s[j].charCodeAt() - 'A'.charCodeAt());
      }
      if (lower === upper && j - i + 1 > maxLen) {
        maxPos = i;
        maxLen = j - i + 1;
      }
    }
  }
  return s.slice(maxPos, maxPos + maxLen);
};
// @lc code=end

