/*
 * @lc app=leetcode.cn id=2104 lang=javascript
 *
 * [2104] 子数组范围和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let minLeft = [], minRight = [], maxLeft = [], maxRight = [], minStack = [], maxStack = [];
  for (let i = 0; i < nums.length; i++) {
    while (minStack.length !== 0 && nums[minStack[minStack.length - 1]] > nums[i]) {
      minStack.pop();
    }
    minLeft[i] = minStack.length === 0 ? -1 : minStack[minStack.length - 1];
    minStack.push(i);

    while (maxStack.length !== 0 && nums[maxStack[maxStack.length - 1]] <= nums[i]) {
      maxStack.pop();
    }
    maxLeft[i] = maxStack.length === 0 ? -1 : maxStack[maxStack.length - 1];
    maxStack.push(i);
  }
  minStack = [];
  maxStack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (minStack.length !== 0 && nums[minStack[minStack.length - 1]] >= nums[i]) {
      minStack.pop();
    }
    minRight[i] = minStack.length === 0 ? nums.length : minStack[minStack.length - 1];
    minStack.push(i);

    while (maxStack.length !== 0 && nums[maxStack[maxStack.length - 1]] < nums[i]) {
      maxStack.pop();
    }
    maxRight[i] = maxStack.length === 0 ? nums.length : maxStack[maxStack.length - 1];
    maxStack.push(i)
  }
  let sumMin = 0, sumMax = 0;
  for (let i = 0; i < nums.length; i++) {
    sumMin += (i - minLeft[i]) * (minRight[i] - i) * nums[i];
    sumMax += (i - maxLeft[i]) * (maxRight[i] - i) * nums[i];
  }
  return sumMax - sumMin;
};
// @lc code=end