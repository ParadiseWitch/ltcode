/*
 * @lc app=leetcode.cn id=2055 lang=javascript
 *
 * [2055] 蜡烛之间的盘子
 *
 * https://leetcode-cn.com/problems/plates-between-candles/description/
 *
 * algorithms
 * Medium (39.09%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    12.3K
 * Total Submissions: 29.1K
 * Testcase Example:  '"**|**|***|"\n[[2,5],[5,9]]'
 *
 * 给你一个长桌子，桌子上盘子和蜡烛排成一列。给你一个下标从 0 开始的字符串 s ，它只包含字符 '*' 和 '|' ，其中 '*' 表示一个 盘子
 * ，'|' 表示一支 蜡烛 。
 * 
 * 同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] 表示 子字符串
 * s[lefti...righti] （包含左右端点的字符）。对于每个查询，你需要找到 子字符串中 在 两支蜡烛之间 的盘子的 数目 。如果一个盘子在
 * 子字符串中 左边和右边 都 至少有一支蜡烛，那么这个盘子满足在 两支蜡烛之间 。
 * 
 * 
 * 比方说，s = "||**||**|*" ，查询 [3, 8] ，表示的是子字符串 "*||**|" 。子字符串中在两支蜡烛之间的盘子数目为 2
 * ，子字符串中右边两个盘子在它们左边和右边 都 至少有一支蜡烛。
 * 
 * 
 * 请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 输入：s = "**|**|***|", queries = [[2,5],[5,9]]
 * 输出：[2,3]
 * 解释：
 * - queries[0] 有两个盘子在蜡烛之间。
 * - queries[1] 有三个盘子在蜡烛之间。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 
 * 输入：s = "***|**|*****|**||**|*", queries =
 * [[1,17],[4,5],[14,17],[5,11],[15,16]]
 * 输出：[9,0,0,0,0]
 * 解释：
 * - queries[0] 有 9 个盘子在蜡烛之间。
 * - 另一个查询没有盘子在蜡烛之间。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= s.length <= 10^5
 * s 只包含字符 '*' 和 '|' 。
 * 1 <= queries.length <= 10^5
 * queries[i].length == 2
 * 0 <= lefti <= righti < s.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length;
  const preSum = new Array(n).fill(0);
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  let sum = 0;
  let l = -1, r = -1
  for (let i = 0; i < n; i++) { 
    if (s[i] === '*') {
      sum++;
    }
    preSum[i] = sum
    if (s[i] === '|') {
      l = i
    } 
    left[i] = l
    if (s[n - 1 - i] === '|') {
      r = n - 1 - i
    } 
    right[n - 1 - i] = r
  }

  const ans = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const x = right[query[0]], y = left[query[1]];
    ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
  }
  return ans;
};
// @lc code=end

const main = () => { 
  console.log(platesBetweenCandles('**|**|***|', [[2, 5], [5, 9]]));
  console.log(platesBetweenCandles('***|**|*****|**||**|*', [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]));
}

main();