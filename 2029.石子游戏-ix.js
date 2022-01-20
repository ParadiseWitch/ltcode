/*
 * @lc app=leetcode.cn id=2029 lang=javascript
 *
 * [2029] 石子游戏 IX
 */

// @lc code=start
/**
 * @see https://leetcode-cn.com/problems/stone-game-ix/solution/shi-zi-you-xi-ix-by-leetcode-solution-kk5f/
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
  let cnt1 = cnt2 = cnt0 = 0;
  for(let i = 0; i < stones.length; i++) {
      if(stones[i] % 3 === 1) {
          cnt1++;
      } else if(stones[i] % 3 === 2) {
          cnt2++;
      } else {
          cnt0++;
      }
  }
  if(cnt0 % 2 === 0){
    return cnt1 >= 1 && cnt2 >= 1;
  }
  return cnt1 - cnt2 > 2 || cnt2 - cnt1 > 2;

};
// @lc code=end

