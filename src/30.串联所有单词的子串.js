/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (36.12%)
 * Likes:    574
 * Dislikes: 0
 * Total Accepted:    86.4K
 * Total Submissions: 239.2K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "barfoothefoobarman", words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
 * 输出：[6,9,12]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 1 
 * 1 
 * words[i] 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = [];

  let wordLength = words[0].length;
  let wordCount = words.length;
  let len = wordCount * wordLength; //Length of sliding window

  let map = {}

  for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq

  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len); //Generate substring of sliding window length
    if (isConcat(sub, map, wordLength)) res.push(i)
  }

  return res;
};

/**
 * sub是否用完map中的word
 * @param {*} sub 
 * @param {*} map 
 * @param {*} wordLength 
 * @returns 
 */
function isConcat(sub, map, wordLength) {
  let seen = {};
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength);
    seen[word] = seen[word] + 1 || 1
  }

  for (let key in map) {
    if (map[key] !== seen[key]) return false; //Word freq must match between map and seen
  }
  return true;
}
// @lc code=end
/* 
"foobarfoobar"
["foo","bar"]
*/

const main = () => {
  console.log(findSubstring("foobarfoobar", ["foo", "bar"]));
}
main();

