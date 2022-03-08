/*
 * @lc app=leetcode.cn id=1043 lang=javascript
 *
 * [1043] 分隔数组以得到最大和
 *
 * https://leetcode-cn.com/problems/partition-array-for-maximum-sum/description/
 *
 * algorithms
 * Medium (69.61%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 12.5K
 * Testcase Example:  '[1,15,7,9,2,5,10]\n3'
 *
 * 给你一个整数数组 arr，请你将该数组分隔为长度最多为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。
 * 
 * 返回将数组分隔变换后能够得到的元素最大和。
 * 
 * 
 * 
 * 注意，原数组和分隔后的数组对应顺序应当一致，也就是说，你只能选择分隔数组的位置而不能调整数组中的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：arr = [1,15,7,9,2,5,10], k = 3
 * 输出：84
 * 解释：
 * 因为 k=3 可以分隔成 [1,15,7] [9] [2,5,10]，结果为 [15,15,15,9,10,10,10]，和为
 * 84，是该数组所有分隔变换后元素总和最大的。
 * 若是分隔成 [1] [15,7,9] [2,5,10]，结果就是 [1, 15, 15, 15, 10, 10, 10]
 * 但这种分隔方式的元素总和（76）小于上一种。 
 * 
 * 示例 2：
 * 
 * 
 * 输入：arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
 * 输出：83
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：arr = [1], k = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// dp[n]=max(dp[n-1]+max(arr[n])*1, dp[n-2]+max(arr[n], arr[n-1])*2, ... , dp[n-k]+max(arr[n], arr[n-k+1])*k);
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  let dp = new Array(n).fill(0);
  // init
  for (let i = 1; i <= k; i++) {
    dp[i - 1] = Math.max(...arr.slice(0, i)) * i;
  }
  for (let i = k; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + Math.max(...arr.slice(i - j + 1, i + 1)) * j);
    }
  }
  return dp[n - 1];
};
// @lc code=end
const main = () => {
  console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
}
main();