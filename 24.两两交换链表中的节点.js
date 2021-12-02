/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (70.42%)
 * Likes:    1142
 * Dislikes: 0
 * Total Accepted:    342.4K
 * Total Submissions: 486.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 
 * 
 * 
 * 
 * 
 * 进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let v1 = head;
  let v2 = v1.next;
  let v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
}

// @lc code=end

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  toString() {
    let res = '';
    let cur = this;
    while (cur) {
      res += cur.val + '->';
      cur = cur.next;
    }
    return res + "null";
  }
}

const constructListNodes = (...arr) => {
  if (arr.length === 0) return null;
  let node = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    node = new ListNode(arr[i], node);
  }
  return node;
}

const main = () => {
  const list = [1, 2, 3, 4];
  const head = constructListNodes(...list);
  const res = swapPairs(head);
  console.log(res.toString());
}
main();
