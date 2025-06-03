/*
 * @lc app=leetcode.cn id=2154 lang=javascript
 *
 * [2154] 将找到的值乘以 2
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let res = original
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % original === 0
      && isPowerOfTwo(nums[i] / original)) {
      arr.push(nums[i]);
    }
  }
  arr = [...new Set(arr)]
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === res) {
      res *= 2;
    } else {
      break;
    }
  }
  return res
};

function isPowerOfTwo(n) {
  return n > 0 && Number.isInteger(Math.log2(n));
}
// @lc code=end

console.log(findFinalValue([4, 7, 1, 16, 1, 2, 7, 13], 1)); // 8
