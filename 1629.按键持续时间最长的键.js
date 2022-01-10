/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  const n = releaseTimes.length;
  let ans = keysPressed[0];
  let maxTime = releaseTimes[0];
  for (let i = 1; i < n; i++) {
    const key = keysPressed[i];
    const time = releaseTimes[i] - releaseTimes[i - 1];
    if (time > maxTime || (time === maxTime && key > ans)) {
      ans = key;
      maxTime = time;
    }
  }
  return ans;
};
// @lc code=end

