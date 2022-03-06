/*
 * @lc app=leetcode.cn id=2016 lang=javascript
 *
 * [2016] 增量元素之间的最大差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -Infinity;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      max = Math.max(max, nums[j] - nums[i])
    }
  }
  return max <= 0 ? -1 : max;
};
// @lc code=end

const main = () => {
  console.log(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  console.log(maximumDifference([9, 4, 3, 2]));
  console.log(maximumDifference([1, 5, 2, 10]));
}

main()