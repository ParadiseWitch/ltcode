/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if(nums.length < 3) return false;
  let first = nums[0];
  let second = Number.MAX_SAFE_INTEGER;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > second){
      return true;
    } else if(nums[i] > first) {
      second = nums[i];
    }else{
      first = nums[i];
    }
  } 
  return false;
};
// @lc code=end

const main = () => {
  console.log(increasingTriplet([5,2,7]));
}

main();

