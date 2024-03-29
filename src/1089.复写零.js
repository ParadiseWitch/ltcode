/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const n = arr.length;
  let top = 0;
  let i = -1;
  while (top < n) {
    i++;
    if (arr[i] !== 0) {
      top++;
    } else {
      top += 2;
    }
  }
  let j = n - 1;
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] === 0) {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }
};
// @lc code=end

