/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] 骑士在棋盘上的概率
 *
 * https://leetcode-cn.com/problems/knight-probability-in-chessboard/description/
 *
 * algorithms
 * Medium (51.45%)
 * Likes:    178
 * Dislikes: 0
 * Total Accepted:    12.9K
 * Total Submissions: 23.4K
 * Testcase Example:  '3\n2\n0\n0'
 *
 * 在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始
 * 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。
 * 
 * 象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。
 * 
 * 
 * 
 * 每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。
 * 
 * 骑士继续移动，直到它走了 k 步或离开了棋盘。
 * 
 * 返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: n = 3, k = 2, row = 0, column = 0
 * 输出: 0.0625
 * 解释: 有两步(到(1,2)，(2,1))可以让骑士留在棋盘上。
 * 在每一个位置上，也有两种移动可以让骑士留在棋盘上。
 * 骑士留在棋盘上的总概率是0.0625。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: n = 1, k = 0, row = 0, column = 0
 * 输出: 1.00000
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= n <= 25
 * 0 <= k <= 100
 * 0 <= row, column <= n
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  let cache = {}
  return recursive(n, k, row, column);

  function recursive(n, k, r, c) {
    if (r < 0 || r >= n || c < 0 || c >= n) {
      return 0;
    }
    if (k == 0) {
      return 1;
    }
    let key = `${k}-${r}-${c}`;
    if(cache[key]) return cache[key];
    let res = 0;
    let dr = [-2, -1, 1, 2, 2, 1, -1, -2];
    let dc = [-1, -2, -2, -1, 1, 2, 2, 1];
    for (let i = 0; i < 8; i++) {
      res += recursive(n, k - 1, r + dr[i], c + dc[i]);
    }
    cache[key] = res / 8;
    return res / 8;
  }
};

// @lc code=end
const main = () => { 
  console.log(knightProbability(3, 2, 0, 0), 0.0625);
  console.log(knightProbability(1, 0, 0, 0), 1);
  console.log(knightProbability(3, 2, 1, 1), 0);
  console.log(knightProbability(8, 30, 6, 4), 0.00019);
}
main();

