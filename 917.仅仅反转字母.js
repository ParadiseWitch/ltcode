/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (56.98%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    42.3K
 * Total Submissions: 71.5K
 * Testcase Example:  '"ab-cd"'
 *
 * 给你一个字符串 s ，根据下述规则反转字符串：
 * 
 * 
 * 所有非英文字母保留在原有位置。
 * 所有英文字母（小写或大写）位置反转。
 * 
 * 
 * 返回反转后的 s 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示
 * 
 * 
 * 1 <= s.length <= 100
 * s 仅由 ASCII 值在范围 [33, 122] 的字符组成
 * s 不含 '\"' 或 '\\'
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let arr = s.split('');
  let l = 0, r = s.length - 1;
  while (l < r) { 
    if (!isLetter(arr[l])) {
      l++;
      continue;
    }
    if (!isLetter(arr[r])) {
      r--;
      continue;
    }
    let tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
    l++;
    r--;
  }
  return arr.join('');
};
function isLetter(s) {
  return s.toLowerCase() !== s.toUpperCase();
}
// @lc code=end
const main = () => { 
  console.log(reverseOnlyLetters("ab-cd"));
}
main();


