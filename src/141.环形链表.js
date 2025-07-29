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
  let f = head.next;
  let l = head;
  while (l != null && f != null && f.next != null) {
    if (f == l) return true;
    f = f.next.next;
    l = l.next;
  }
  return false

};
// @lc code=end

