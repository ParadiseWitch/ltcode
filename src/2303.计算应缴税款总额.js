/*
 * @lc app=leetcode.cn id=2303 lang=javascript
 *
 * [2303] 计算应缴税款总额
 */

// @lc code=start
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let res = 0
  brackets = [[0, 0], ...brackets]
  const n = brackets.length
  let p = brackets[n - 1][1]
  for (let i = n - 1; i >= 0; i--) {
    const b = brackets[i]
    const u = b[0]
    if (u >= income) {
      p = b[1]
      continue
    }
    let s = income - u
    income = u
    res += s * p / 100
    p = b[1]
  }
  return res
};
// @lc code=end


const main = () => {
  console.log(calculateTax([[3, 50], [7, 10], [12, 25]], 10), 2.65000);
}
main()
