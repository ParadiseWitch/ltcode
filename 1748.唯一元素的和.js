/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let map = {};
  let ret = 0
  nums.forEach(num => {
    if(map[num]) {
      map[num]++;
    } else{
      map[num] = 1;
    }
  })
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const value = map[key];
      if(value == 1) {
        ret += parseInt(key);
      }
    }
  }
  return ret;
};
// @lc code=end

const main = () => {
  console.log(sumOfUnique([1,2,3,3]));
}
main();