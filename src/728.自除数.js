/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    if(isDividingNumber(i)){
      res.push(i)
    }
  }
  return res;
};
const isDividingNumber = (num) => {
  let s = num % 10;
  let temp = num;
  let i = 1;
  while (temp > 0) {
    s = temp % 10;
    temp = Math.floor(temp / 10);
    if (s === 0) return false;
    if (num % s !== 0) return false;
    i++;
  }
  return true;
}
// @lc code=end
const main = () => {
  console.log(selfDividingNumbers(1, 22));
}
main()
