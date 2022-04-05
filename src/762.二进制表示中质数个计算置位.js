/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (isPrimeNum(numOfOne(i))) count++;
  }
  return count;
};
const numOfOne = (num) => {
  let cnt = 0;
  while(num > 0){
    num = num & (num - 1);
    cnt ++;
  }
  return cnt;
}
const isPrimeNum = (num) => {
  if(num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  console.log("isPrimeNum:" + num);
  return true;
}
// @lc code=end

const main = ()=>{
  console.log(countPrimeSetBits(6, 10));
  console.log(countPrimeSetBits(10, 15));
}
main()