/*
 * @lc app=leetcode.cn id=2000 lang=javascript
 *
 * [2000] 反转单词前缀
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (word.indexOf(ch) === -1) return word;
  let prefix = word.slice(0, word.indexOf(ch) + 1);
  let suffix = word.slice(word.indexOf(ch) + 1, word.length)
  return prefix.split("").reverse().join("") + suffix;
};
// @lc code=end

const main = () => {
  let word = "abcd", ch = "z"
  console.log(reversePrefix(word, ch));
}
main();