/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const n = timePoints.length;
  if (n > 1440) {
    return 0;
  }
  timePoints.sort();
  let ans = Number.MAX_VALUE;
  let t0Minutes = getMinutes(timePoints[0]);
  let preMinutes = t0Minutes;
  for (let i = 1; i < n; ++i) {
    const minutes = getMinutes(timePoints[i]);
    ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
    preMinutes = minutes;
  }
  ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
  return ans;
};

const getMinutes = (t) => {
  return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
}

// @lc code=end

