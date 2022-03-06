/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, k) {
  if(s.length == 1 || k == 1) return s;
  const ansArr = new Array(k).fill('').map(() => []);
  for (let i = 0; i < s.length; i++) {
    let mod = i % (2 * k - 2);

    if (mod >= k) {
      ansArr[2 * k - mod - 2].push(s[i]);
    }else{
      ansArr[mod].push(s[i]);
    }
  }
  return ansArr.map(row => row.join('')).join('');
};
// @lc code=end
const main = () => {
  // console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR'); 
  // console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
  console.log(convert('AB', 1) === 'AB');
}
main();
