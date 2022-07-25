/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var consecutiveNumbersSum = function (n) {
//   let ans = 0;
//   const bound = 2 * n;
//   for (let k = 1; k * (k + 1) <= bound; k++) {
//     if (isKConsecutive(n, k)) {
//       ans++;
//     }
//   }
//   return ans;
// }

// const isKConsecutive = (n, k) => {
//   if (k % 2 === 1) {
//     return n % k === 0;
//   } else {
//     return n % k !== 0 && 2 * n % k === 0;
//   }
// };
var consecutiveNumbersSum = function (n) {
  let res = 0;
  for (let k = 1; k * k <= 2 * n; k++) {
    if ((n - (k - 1) * k / 2) % k == 0) {
      res++;
    }
  }
  return res;
};
// @lc code=end

const main = () => {
  console.log(consecutiveNumbersSum(5));
}

main();