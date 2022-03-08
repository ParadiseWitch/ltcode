/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  let ret = []
  for (let i = 0; i < 1024; i++) {
    const h = i >> 6;
    const m = i & 63; 
    if(h<12 && m <60 && i.toString(2).split('0').join('').length == turnedOn){
      ret.push(`${h}:${m<10?'0'+m:m}`)
    }
  }
  return ret;
};
// @lc code=end

const main = () => {
  console.log(readBinaryWatch(1));
}
main();
