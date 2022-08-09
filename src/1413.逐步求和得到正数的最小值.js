/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let accSum = 0, accSumMin = 0;
    for (const num of nums) {
        accSum += num;
        accSumMin = Math.min(accSumMin, accSum);
    }
    return -accSumMin + 1;
};
// @lc code=end

