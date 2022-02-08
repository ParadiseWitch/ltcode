/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let map = new Map();
  let ret = [];
  const words1 = s1.split(' ');
  const words2 = s2.split(' ');

  const setMap = e => {
    if (map.get(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  }

  words1.forEach(setMap);
  words2.forEach(setMap);
  for (let [key, value] of map) {
    if (value === 1) {
      ret.push(key);
    }
  }
  return ret;
};

// @lc code=end

const main = () => {
  console.log(uncommonFromSentences("apple apple", "bannana"));
}
main();
