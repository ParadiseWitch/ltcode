/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  let m = month;
  if (month <= 2) {
    m = month + 12;
    year--;
  }
  let c = parseInt(year / 100);
  let y = year % 100;
  // 由于蔡勒公式最后计算 D 可能为负数，需要处理一下。方法很多：这里由 D 计算式发现减的内容最大为 199 所以可以加上一个大于 199 且是 7 的倍数的数。我随便取一个 210 加上保证结果为正。
  let D = (
    parseInt(c / 4)
    - 2 * c
    + y
    + parseInt(y / 4)
    + parseInt(13 * (m + 1) / 5)
    + day
    - 1
    + 210
  )
  let w = D % 7
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][w];
};
// @lc code=end

