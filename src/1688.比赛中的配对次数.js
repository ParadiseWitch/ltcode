/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 *
 * https://leetcode-cn.com/problems/count-of-matches-in-tournament/description/
 *
 * algorithms
 * Easy (80.53%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    42.4K
 * Total Submissions: 50.4K
 * Testcase Example:  '7'
 *
 * 给你一个整数 n ，表示比赛中的队伍数。比赛遵循一种独特的赛制：
 * 
 * 
 * 如果当前队伍数是 偶数 ，那么每支队伍都会与另一支队伍配对。总共进行 n / 2 场比赛，且产生 n / 2 支队伍进入下一轮。
 * 如果当前队伍数为 奇数 ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 (n - 1) / 2 场比赛，且产生 (n - 1) / 2 +
 * 1 支队伍进入下一轮。
 * 
 * 
 * 返回在比赛中进行的配对次数，直到决出获胜队伍为止。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 7
 * 输出：6
 * 解释：比赛详情：
 * - 第 1 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。
 * - 第 2 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
 * - 第 3 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
 * 总配对次数 = 3 + 2 + 1 = 6
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 14
 * 输出：13
 * 解释：比赛详情：
 * - 第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。
 * - 第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。 
 * - 第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
 * - 第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
 * 总配对次数 = 7 + 3 + 2 + 1 = 13
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 200
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  // 每场比赛淘汰一支队伍，最终只有一个队伍没有被淘汰，一共需要淘滩 n - 1 个队伍，需要进行 n - 1 次比赛
  return n - 1;
};
// @lc code=end
const main = () => { 
  console.log(numberOfMatches(7));
}
main()
