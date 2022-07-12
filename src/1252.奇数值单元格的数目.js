/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let res = 0;
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (const index of indices) {
    for (let i = 0; i < n; i++) {
      matrix[index[0]][i]++;
    }
    for (let i = 0; i < m; i++) {
      matrix[i][index[1]]++;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((matrix[i][j] & 1) !== 0) {
        res++;
      }
    }
  }
  return res;
};

// @lc code=end

