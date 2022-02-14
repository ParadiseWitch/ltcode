/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] == nums[mid ^ 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};
// @lc code=end
const main = () => {
  console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
  console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
}
main();