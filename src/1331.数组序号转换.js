/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const sortedArr = new Array(arr.length).fill(0);
    sortedArr.splice(0, arr.length, ...arr);
    sortedArr.sort((a, b) => a - b);
    const ranks = new Map()
    for (let i = 0; i < sortedArr.length; i++) {
        if (!ranks.has(sortedArr[i])){
            ranks.set(sortedArr[i], ranks.size + 1);
        }
    }
    const result = new Array(arr.length).fill(0);
    for (let i = 0; i < result.length; i++) {
        result[i] = ranks.get(arr[i]);
    }
    return result;
};
// @lc code=end

