/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 *
 * https://leetcode-cn.com/problems/push-dominoes/description/
 *
 * algorithms
 * Medium (50.12%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 35.1K
 * Testcase Example:  '"RR.L"'
 *
 * n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。
 * 
 * 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
 * 
 * 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。
 * 
 * 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。
 * 
 * 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：
 * 
 * 
 * dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
 * dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
 * dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
 * 
 * 
 * 返回表示最终状态的字符串。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：dominoes = "RR.L"
 * 输出："RR.L"
 * 解释：第一张多米诺骨牌没有给第二张施加额外的力。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：dominoes = ".L.R...LR..L.."
 * 输出："LL.RR.LLRRLL.."
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == dominoes.length
 * 1 <= n <= 10^5
 * dominoes[i] 为 'L'、'R' 或 '.'
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = dominoes.split('');
  let q = [];
  // 初始化队列内容
  for (let [index, value] of arr.entries()) { //已知数组的受力情况的牌
    if (value !== '.') {
      q.push({ force: value, index: index }) //需要记录索引，方便下面一起改变数组
    }
  }
  while (q.length) {  //多源bfs 新一轮多个牌所有的推倒情况
    const temp = []; //记录这轮所有新的状态改变的牌
    //每个牌的情况
    while (q.length) {
      const card = q.pop();
      const { force, index } = card; //出队
      if (force === 'L') { //如果上一张牌为.并且当时上上一张牌不是R的时候，可推倒
        if (arr[index - 1] === '.' && arr[index - 2] !== 'R') {
          temp.push({ force: 'L', index: index - 1 });
        }
      }
      if (force === 'R') {
        if (arr[index + 1] === '.' && arr[index + 2] !== 'L') {
          temp.push({ force: 'R', index: index + 1 });
        }
      }
    }
    //如果边推倒边赋值，R..L的情况，可能RR.L而不是RRLL，但其实左右是同时倒下的，并没有中间一张受力两面的情况
    //所以需要记录后，一起赋值
    for (const value of temp) {
      arr[value.index] = value.force;  //该轮推倒的赋值
    }
    q = temp; //入队新推倒的牌
  }
  return arr.join('');
};
// @lc code=end

const main = () => {
  console.log(pushDominoes(".L.R...LR..L.."));
  console.log(pushDominoes(".L.R."));
}
main()