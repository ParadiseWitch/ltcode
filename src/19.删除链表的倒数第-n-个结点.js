/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let num = 0;
  const vNode = new ListNode(-1);
  vNode.next = head;
  let cur = vNode;

  while (cur.next != null) {
    num++;
    cur = cur.next;
  }

  let targetIdx = num - n + 1;
  cur = vNode;
  let pre = null;
  while (targetIdx > 0) {
    pre = cur;
    cur = cur.next;
    targetIdx--;
  }
  pre.next = cur.next;
  return vNode.next;
};
// @lc code=end

