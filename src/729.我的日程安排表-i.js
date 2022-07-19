/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function() {

};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
var MyCalendar = function () {
  this.booked = [];
};

MyCalendar.prototype.book = function (start, end) {
  for (const arr of this.booked) {
    let l = arr[0], r = arr[1];
    if (l < end && start < r) {
      return false;
    }
  }
  this.booked.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

