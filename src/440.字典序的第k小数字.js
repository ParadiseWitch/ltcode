/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 *
 * https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/description/
 *
 * algorithms
 * Hard (38.73%)
 * Likes:    385
 * Dislikes: 0
 * Total Accepted:    27.9K
 * Total Submissions: 68.2K
 * Testcase Example:  '13\n2'
 *
 * 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: n = 13, k = 2
 * 输出: 10
 * 解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: n = 1, k = 1
 * 输出: 1
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= k <= n <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let curr = 1;
  k--;
  while(k > 0){
    const step = getSteps(curr, n)
    if(k >= getSteps(curr, n)){
      curr++;
      k -= step;
    } else{
      curr *= 10;
      k--;
    }
  }
  return curr;
}

const getSteps = (curr, n) => {
  let step = 0;
  let start = curr;
  let end = curr;
  while(n >= start){
    if(n >= end){
      step += end - start + 1;  
    }else{
      step += n - start + 1;
    }
    start *= 10;
    end = end * 10 + 9; 
  }
  return step;
};
// @lc code=end

const main = () => {
  console.log(findKthNumber(4289384, 1922239));
}
main()