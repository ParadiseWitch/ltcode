/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let map = {};
  text.split('').forEach(c => {
    map[c] = (map[c] || 0) + 1;
  });
  return Math.min(
    map['b'] || 0, 
    map['a'] || 0, 
    parseInt(map['l'] / 2) || 0, 
    parseInt(map['o'] / 2) || 0, 
    map['n'] || 0
  );
};
// @lc code=end
const main = () => {
  console.log(maxNumberOfBalloons("leetcode"));
  console.log(maxNumberOfBalloons("loonbalxballpoon"));
}
main();
