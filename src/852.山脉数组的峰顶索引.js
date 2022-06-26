/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function (arr) {
  const n = arr.length;
  let l = 0, r = n - 2;
  while (l < r) {
    let mid = l + r >> 1;
    if (arr[mid] > arr[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
// @lc code=end

