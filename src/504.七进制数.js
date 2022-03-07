/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let ans = "";
  let flag = true; //是否是正数
  if (num == 0) return "0";
  if (num < 0) {
    num = -num;
    flag = false;
  }
  while (num >= 7) {
    let a = num % 7;
    ans = a + ans;
    num = parseInt(num / 7);
  }
  ans = num + ans;
  return flag ? ans : "-" + ans;
};

// @lc code=end

