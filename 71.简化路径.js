/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArr = path.split('/');
  const stack = [];
  for (let i = 0; i < pathArr.length; i++) {
    const name = pathArr[i];
    if (name === '..') {
      if (stack.length) stack.pop();
    } else if (name.length && name !== ".") stack.push(name);
  }
  return `/${stack.join('/')}`
};
// @lc code=end

const main = () => {
  console.log(simplifyPath("/../"));
}
main();

