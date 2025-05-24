/*
 * @lc app=leetcode.cn id=992 lang=javascript
 * @lcpr version=30204
 *
 * [992] K 个不同整数的子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  return atMostK(nums, k) - atMostK(nums, k - 1);
};

function atMostK(nums, k) {
  const map = new Map();
  let l = 0;
  let r = 0;
  let ans = 0;
  while (r < nums.length) {
    map.set(nums[r], (map.get(nums[r]) || 0) + 1);
    while (map.size > k) {
      map.set(nums[l], map.get(nums[l]) - 1);
      if (map.get(nums[l]) === 0) {
        map.delete(nums[l]);
      }
      l++;
    }
    ans += r - l + 1;
    r++;
  }
  return ans
}
// @lc code=end

let ret = subarraysWithKDistinct([1, 2, 1, 3, 4], 3)
console.log(ret)
/*
// @lcpr case=start
// [1,2,1,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1,3,4]\n3\n
// @lcpr case=end

 */

