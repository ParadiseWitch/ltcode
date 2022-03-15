/*
 * @lc app=leetcode.cn id=2044 lang=javascript
 *
 * [2044] 统计按位或能得到最大值的子集数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = 0;
  let cnt = 0;

  const dfs = (pos, val) => {
    if (pos === nums.length) {
      if (max < val) {
        max = val;
        cnt = 1;
      } else if (max === val) {
        cnt++;
      }
      return;
    }
    dfs(pos + 1, val | nums[pos]);
    dfs(pos + 1, val);
  }

  dfs(0, 0);
  return cnt
};
// @lc code=end

