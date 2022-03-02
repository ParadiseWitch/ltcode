/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let arr = [...flowerbed, 0, 1];
  let prev = -2;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      cnt += Math.floor((i - prev - 2) / 2)
      prev = i;
    }
  };
  return cnt >= n;
};
// @lc code=end

const main = () => {
  console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
}
main();