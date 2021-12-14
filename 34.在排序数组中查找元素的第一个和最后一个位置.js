/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const l = binarySearch(nums, target, false);
  const r = binarySearch(nums, target, true) - 1;
  if (l <= r && r <= nums.length - 1 && nums[l] == target && nums[r] == target) {
    ans = [l, r];
  }
  return ans;
};

const binarySearch = (nums, target, larger) => {
  let l = 0;
  let r = nums.length - 1;
  let ans = nums.length;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let val = nums[mid];
    let condition = larger ? val > target : val >= target;
    if(condition){
      r = mid - 1;
      ans = mid;
    }else{
      l = mid + 1;
    }
  }
  return ans;
}
// @lc code=end

const main = () => {
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
}

main();
