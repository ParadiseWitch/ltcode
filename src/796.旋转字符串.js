/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if(s.length !== goal.length) return false;
  return s.repeat(2).indexOf(goal) != -1;
};
// @lc code=end

const main = () => {
  console.log(rotateString("abcde", "cdeab"));
  console.log(rotateString("abcde", "abced"));
}
main()