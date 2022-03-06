/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    res = Math.min(res, nums[i + k - 1] - nums[i]);
  }
  return res;
};
// @lc code=end
const main = () => {
  console.log(minimumDifference([4, 2, 1, 3], 1));
  console.log(minimumDifference([4, 2, 1, 3], 2));
}
main();

