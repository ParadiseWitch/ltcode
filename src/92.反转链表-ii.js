/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  let pos = 0;
  // 找到 left 的前一个节点
  while (pos < left - 1) {
    pre = pre.next;
    pos++;
  }
  let rightNode = pre
  // 找到 right 的节点
  while (pos < right) {
    rightNode = rightNode.next;
    pos++;
  }
  let leftNode = pre.next;
  let cur = rightNode.next;

  // 断开连接
  pre.next = null;
  rightNode.next = null;
  // 反转链表
  reverseList(leftNode);
  // 反向连接连接
  pre.next = rightNode;
  leftNode.next = cur;

  return dummyNode.next;
};

var reverseList = function (head) {
  // write code here
  if (head == null) return null;
  let prev = null;
  let cur = head;
  while (cur != null) {
    // 反转
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

// TODO 解法2
// @lc code=end

const ListNode = require('./utils/ListNode.js');
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(reverseBetween(head, 2, 4));

