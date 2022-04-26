/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = new Map();
  nums.forEach((k, i) => {
    const v = this.map.get(k);
    if (!v) {
      this.map.set(k, [i]);
      return;
    }
    v.push(i);
  })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const v = this.map.get(target);
  if (!v) {
    return -1;
  }
  return v[Math.floor(Math.random() * v.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

