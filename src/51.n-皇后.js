/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (73.82%)
 * Likes:    1176
 * Dislikes: 0
 * Total Accepted:    178.9K
 * Total Submissions: 242.4K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 9
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) { 
  const res = [];
  backtrack(res, n, [], 0);
  return res;
}

const backtrack = (res, n, board, r) => { 
  // 递归每行，r 为当前行，因此棋子不会在同一行上
  if (r === n) { 
    // 修改res
    // 方案可行，添加到res
    res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
    return;
  }
  // 遍历每列 col
  for (let c = 0; c < n; c++) { 
    // 判断是否在一行
    if (board.some((bc, br) =>
      bc === c || Math.abs(bc - c) === Math.abs(br - r))) { 
      // 破坏规则在一条线上，跳过到下一列
      continue;
    }
    // 这列可行，放置棋子
    board.push(c);
    // 放下一行棋子
    backtrack(res, n, board, r + 1);
    board.pop();
  }

}
// @lc code=end

const main = () => { 
  console.log(solveNQueens(4));
}
main()