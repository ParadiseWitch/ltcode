/*
 * @lc app=leetcode.cn id=2043 lang=javascript
 *
 * [2043] 简易银行系统
 */

// @lc code=start
/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balance = balance;
};

Bank.prototype.transfer = function (account1, account2, money) {
  if (account1 > this.balance.length 
    || account2 > this.balance.length
    || this.balance[account1 - 1] < money) return false;
  this.balance[account1 - 1] -= money;
  this.balance[account2 - 1] += money;
  return true;
};

Bank.prototype.deposit = function (account, money) {
  if(account > this.balance.length) return false;
  this.balance[account - 1] += money;
  return true;
};

Bank.prototype.withdraw = function (account, money) {
  if (account > this.balance.length
    ||this.balance[account - 1] < money) return false;
  this.balance[account - 1] -= money;
  return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// @lc code=end

