/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailSet = new Set();
  for (const email of emails) {
    const i = email.indexOf('@');
    let local = email.slice(0, i).split("+")[0]; // 去掉本地名第一个加号之后的部分
    local = local.replaceAll(".", ""); // 去掉本地名中所有的句点
    emailSet.add(local + email.slice(i));
  }
  return emailSet.size;
};
// @lc code=end

