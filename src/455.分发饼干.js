/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 贪心：给剩余孩子里最小饥饿度的孩子分配最小的能饱腹的饼干
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0, j = 0
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }
  return i;
};
// @lc code=end

const main = () => {
  console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
}
main();