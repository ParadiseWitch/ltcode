/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let n = num;
  if(n == 0) return 0;
  if(n % 9 == 0) return 9;
  return n % 9;
};
// @lc code=end

const main = () => {
  console.log(addDigits(18));
}
main()  