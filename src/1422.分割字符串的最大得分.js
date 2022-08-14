/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    const sArr = s.split('');
    let score = sArr.filter(e => e == '1').length;
    let ret = score - 1;
    for (let i = 0; i < sArr.length - 1; i++) {
        let e = sArr[i]
        if (e == '0') {
            score++;
            ret = Math.max(ret, score);
        } else if (e == '1') {
            score--
        }
    }
    return ret;
};
// @lc code=end

