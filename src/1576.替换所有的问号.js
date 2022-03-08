/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const rcArr = ['a', 'b', 'c'];
  const cArr = [...s];
  const n = cArr.length;
  for (let i = 0; i < n; i++) {
    const curChar = cArr[i];
    if (curChar === '?') {
      for (let j = 0; j < rcArr.length; j++) {
        const rc = rcArr[j];
        if ((i > 0 && cArr[i - 1] == rc) ||
          (i < n - 1 && cArr[i + 1] == rc)) {
          continue;
        }
        cArr[i] = rc;
        break;
      }
    }
  }
  return cArr.join('');
};
// @lc code=end

const main = () => {
  console.log(modifyString('???w'));
}
main();

