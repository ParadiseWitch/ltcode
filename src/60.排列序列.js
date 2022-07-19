/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Hard (52.96%)
 * Likes:    687
 * Dislikes: 0
 * Total Accepted:    111K
 * Total Submissions: 208.8K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3, k = 3
 * 输出："213"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 4, k = 9
 * 输出："2314"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 3, k = 1
 * 输出："123"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const a = new Array(n).fill(0).map((_, i) => i + 1);
  const factorials = [1];
  for (let i = 1; i < a.length; i++) {
    factorials.push(factorials[i - 1] * i);
  }

  console.log(factorials);
  let result = '';
  while (a.length > 0) {
    const f = factorials[a.length - 1];
    const index = Math.floor((k - 1) / f);
    const num = a.splice(index, 1)[0];
    result += num;
    k -= index * f;
  }
  return result;
};

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
// @lc code=end

const main = () => {
  console.log(factorial(5));
  console.log(getPermutation(3, 3));
}

main()

