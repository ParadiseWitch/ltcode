/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  /**
   * 贪心：把所有孩子的糖果数初始化为 1；先从左往右遍历一遍，如果右边孩子的评分比左边的高，则右边孩子的糖果数更新为左边孩子的糖果数加 1；再从右往左遍历一遍，如果左边孩子的评分比右边的高，且左边孩子当前的糖果数不大于右边孩子的糖果数，则左边孩子的糖果数更新为右边孩子的糖果数加 1。这里的贪心策略即为，在每次遍历中，只考虑并更新相邻一侧的大小关系。
   */
  let n = ratings.length;
  let nums = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      nums[i] = nums[i - 1] + 1;
    }
  };
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && nums[i] <= nums[i + 1]) {
      nums[i] = nums[i + 1] + 1;
    }
  }
  return nums.reduce((a, b) => a + b);
}
  // @lc code=end

  const main = () => {
    console.log(candy([1, 3, 4, 5, 2]
    ));
  }

  main();