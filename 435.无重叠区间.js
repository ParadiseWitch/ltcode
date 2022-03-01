/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 贪心：优先保留结尾小且不相交的区间。
  let ans = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] < prev) {
      ans++;
    } else {
      prev = intervals[i][1];
    }
  }
  return ans;
};
// @lc code=end
const main = () => {
  console.log(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]
));
}
main()
