/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null) return false;
  if (head.next == null) return false;
  let f = head.next.next;
  let l = head.next;
  while (f != l) {
    if (f == null || f.next == null) return false;
    f = f.next.next;
    l = l.next;
  }
  return true
};
// @lc code=end

