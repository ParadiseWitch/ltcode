/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 *
 * https://leetcode-cn.com/problems/network-delay-time/description/
 *
 * algorithms
 * Medium (53.16%)
 * Likes:    503
 * Dislikes: 0
 * Total Accepted:    67.7K
 * Total Submissions: 127.4K
 * Testcase Example:  '[[2,1,1],[2,3,1],[3,4,1]]\n4\n2'
 *
 * 有 n 个网络节点，标记为 1 到 n。
 * 
 * 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点，
 * wi 是一个信号从源节点传递到目标节点的时间。
 * 
 * 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：times = [[1,2,1]], n = 2, k = 1
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：times = [[1,2,1]], n = 2, k = 2
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= k <= n <= 100
 * 1 <= times.length <= 6000
 * times[i].length == 3
 * 1 <= ui, vi <= n
 * ui != vi
 * 0 <= wi <= 100
 * 所有 (ui, vi) 对都 互不相同（即，不含重复边）
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。
var networkDelayTime = function (times, n, k) {
  // 每个节点的最短接受时间
  const INF = Number.MAX_SAFE_INTEGER;
  const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
  for (const t of times) {
    const x = t[0] - 1, y = t[1] - 1;
    g[x][y] = t[2];
  }

  const dist = new Array(n).fill(INF);
  dist[k - 1] = 0;
  const used = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    let min = INF;
    let y = 0;
    let minIdx = 0;
    // 找到最小的节点
    while (y < n) {
      if (!used[y] && min > dist[y]) {
        min = Math.min(min, dist[y]);
        minIdx = y;
      }
      y++;
    }
    used[minIdx] = true;
    // 比较更新
    for (let y = 0; y < n; y++) {
      if (g[minIdx][y] != INF && dist[y] > dist[minIdx] + g[minIdx][y]) {
        dist[y] = dist[minIdx] + g[minIdx][y];
      }
    }


  }
  return Math.max(...dist) == INF ? -1 : Math.max(...dist);
};
// @lc code=end
const main = () => {
  console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2), 2);
  console.log(networkDelayTime([[1, 2, 1]], 2, 2), -1);
  console.log(networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]], 3, 2), 6);
}
main();
