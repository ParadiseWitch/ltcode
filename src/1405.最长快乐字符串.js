/*
 * @lc app=leetcode.cn id=1405 lang=javascript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const res = [];
  const arr = [[a, 'a'], [b, 'b'], [c, 'c']];

  while (true) {
    arr.sort((a, b) => b[0] - a[0]);
    let hasNext = false;
    for (const [i, [c, ch]] of arr.entries()) {
      if (c <= 0) {
        break;
      }
      const m = res.length;
      if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
        continue;
      }
      hasNext = true;
      res.push(ch);
      arr[i][0]--;
      break;
    }
    if (!hasNext) {
      break;
    }
  }

  return res.join('');
};

// @lc code=end

