/*
 * @lc app=leetcode.cn id=857 lang=javascript
 *
 * [857] 雇佣 K 名工人的最低成本
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
*/var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const h = new Array(n).fill(0).map((_, i) => i);
  h.sort((a, b) => {
    return quality[b] * wage[a] - quality[a] * wage[b];
  });
  let res = 1e9;
  let totalq = 0.0;
  const pq = new MaxPriorityQueue();
  for (let i = 0; i < k - 1; i++) {
    totalq += quality[h[i]];
    pq.enqueue(quality[h[i]]);
  }
  for (let i = k - 1; i < n; i++) {
    let idx = h[i];
    totalq += quality[idx];
    pq.enqueue(quality[idx]);
    const totalc = (wage[idx] / quality[idx]) * totalq;
    res = Math.min(res, totalc);
    totalq -= pq.dequeue().element;
  }
  return res;
};
// @lc code=end

