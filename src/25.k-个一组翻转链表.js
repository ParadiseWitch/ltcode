/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (65.81%)
 * Likes:    1378
 * Dislikes: 0
 * Total Accepted:    249.4K
 * Total Submissions: 379K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 1
 * 输出：[1,2,3,4,5]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：head = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 列表中节点的数量在范围 sz 内
 * 1 
 * 0 
 * 1 
 * 
 * 
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0, head);
  let pre = hair;
  // let cur = head;

  // if (!head || k <= 1) return head;
  let tail = pre;
  let count = 0;
  while (count < k && tail.next) {
    tail = tail.next;
    count++;
  }
  if (count !== k) return hair.next;
  let [nh, nt] = reverse(head, tail);
  nt.next = reverseKGroup(nt.next, k);
  return nh;

};

const reverse = (head, tail) => {
  if(!head || !tail) return [head, tail];
  let pre = tail.next;
  let cur = head;
  let end = tail.next
  while (cur !== end) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return [tail, head];

}
// @lc code=end

const ListNode = require('./utils/ListNode');
const main = () => {

  // const head = ListNode.fromArray(...[1, 2, 3, 4, 5]);
  // const tail = head.getNode(1);

  reverseKGroup(ListNode.fromArray(...[1, 2, 3, 4, 5]), 2).print();
}
main()
