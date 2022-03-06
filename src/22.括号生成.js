/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.28%)
 * Likes:    2183
 * Dislikes: 0
 * Total Accepted:    382.3K
 * Total Submissions: 494.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
  * ret(n)其中一个元素 = "(" + ret(p)其中一个 + ")" + ret[q]其中一个
  * 
  * ret0      []
  * ret1      ["()"]
  * ret2      ["()()","(())"] 
  * ret3  0,2 ["()()()","()(())"]
          1,1 ["(())()"]  
          2,0 ["((()))","(()())"]               
  * ret4  0,3 ["()()()()","()()(())","()(())()","()((()))","()(()())"]
          1,2 ["(())()()","(())(())"]
          2,1 ["(()())()","((()))()"]
          3,0 ["(()()())","(()(()))","(((()))),((()()))"]
  */
  // dp存储所有的结果
  let dp = [[""], ["()"]];
  // let ret = ["()"];
  for (let i = 2; i <= n; i++) {
    let ret = []
    for (let j = 0; j <= i - 1; j++) {
      let p = dp[j];
      let q = dp[i - 1 - j];
      // 从p选一个
      for (let pn = 0; pn < p.length; pn++) {
        // 从q选一个
        for (let qn = 0; qn < q.length; qn++) {
          ret.push(`(${p[pn]})${q[qn]}`)
        }
      }
    }
    dp.push(ret)
  }
  return dp[n]
};

// const main = () => {
//   console.log(generateParenthesis(3));
// }
// main()
// @lc code=end

