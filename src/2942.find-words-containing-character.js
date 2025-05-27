/*
 * @lc app=leetcode.cn id=2942 lang=javascript
 * @lcpr version=30204
 *
 * [2942] 查找包含给定字符的单词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const ans = []
  words.forEach((w, index) => {
    if (w.includes(x)) {
      ans.push(index)
    }
  });
  return ans;
};
// @lc code=end



/*
// @lcpr case=start
// ["leet","code"]\n"e"\n
// @lcpr case=end

// @lcpr case=start
// ["abc","bcd","aaaa","cbc"]\n"a"\n
// @lcpr case=end

// @lcpr case=start
// ["abc","bcd","aaaa","cbc"]\n"z"\n
// @lcpr case=end

 */

