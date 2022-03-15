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
  const n = nums.length;
  let max = 0;
  let cnt = 0;

  for (let i = 0; i < 1 << n; i++) {
    let val = 0;
    for (let j = 0; j < n; j++) {
      if (i >> j & 1 == 1){
        val |= nums[j];
      }
    }
    if(val > max){
      max = val;
      cnt = 1;
    } else if(val === max){
      cnt++;
    }
  }
  return cnt;
};
// @lc code=end

