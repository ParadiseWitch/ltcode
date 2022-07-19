/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
};
// @lc code=end

