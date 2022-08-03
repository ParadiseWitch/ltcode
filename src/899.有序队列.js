/*
 * @lc app=leetcode.cn id=899 lang=javascript
 *
 * [899] 有序队列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    if (k === 1) {
        let ans = s;
        for (let i = 0; i < s.length - 1; ++i) {
            const n = s.length;
            s = s.substring(1, n) + s[0];
            ans = ans < s ? ans : s;
        }
        return ans;
    }
    return [...s].sort().join('');
};

// @lc code=end

