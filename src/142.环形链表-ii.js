/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head == null) return null;
  if (head.next == null) return null;
  let a = head;
  let b = cycleNode(head);
  if (b == null) return null;
  while (a != b) {
    a = a.next;
    b = b.next;
  }
  return b;
};


var cycleNode = function (head) {
  if (head == null) return null;
  if (head.next == null) return null;
  let f = head.next.next;
  let l = head.next;
  while (f != l) {
    if (f == null || f.next == null) return null;
    f = f.next.next;
    l = l.next;
  }
  return f
};
// @lc code=end

