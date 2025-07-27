/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  const nodes = []
  let node = head
  while (node) {
    nodes.push(node)
    node = node.next
  };
  for (let i = nodes.length - 1; i >= 0; i--) {
    nodes[i].next = nodes[i - 1]
  }
  if (nodes.length > 0) {
    nodes[0].next = null
  }
  return nodes[nodes.length - 1] || null
}
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

reverseList(head)
