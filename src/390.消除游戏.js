/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let a1 = 1;
  let k = 0, cnt = n, step = 1;
  while (cnt > 1) {
    if (k % 2 === 0) { // 正向
      a1 = a1 + step;
    } else { // 反向
      a1 = (cnt % 2 === 0) ? a1 : a1 + step;
    }
    k++;
    cnt = cnt >> 1;
    step = step << 1;
  }
  return a1;
};

// @lc code=end

let main = () => {
  console.log(lastRemaining(5));
}
main()

