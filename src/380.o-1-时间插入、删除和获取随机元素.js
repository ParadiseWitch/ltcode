/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  let index = this.map.get(val);
  this.arr[index] = this.arr[this.arr.length - 1];
  this.map.set(this.arr[index], index);
  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let ramdom_num = Math.floor(Math.random() * this.arr.length);
  return this.arr[ramdom_num];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

