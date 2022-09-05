/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length, n = mat[0].length;
  const rowsSum = new Array(m).fill(0);
  const colsSum = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j];
      colsSum[j] += mat[i][j];
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
        res++;
      }
    }
  }
  return res;
};
// @lc code=end

