/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a,b) => a-b);
  let d = Number.MAX_VALUE;
  let ans = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    let delta = arr[i] - arr[i - 1];
    if (d > delta) {
      d = delta; 
      ans = [[arr[i - 1], arr[i]]]
    } else if (d == delta) {
      ans.push([arr[i - 1], arr[i]])
    }
  }
  return ans;
};
// @lc code=end


const main = () => {
  const arr1 = [40, 11, 26, 27, -20];
  console.log(minimumAbsDifference(arr1));
}

main()

