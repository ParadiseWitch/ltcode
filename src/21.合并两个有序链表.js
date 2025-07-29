/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.72%)
 * Likes:    2062
 * Dislikes: 0
 * Total Accepted:    779.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const vNode = new ListNode(-1);
  let mergeList = vNode;
  while (list1 && list2) {
    // 比较当前两个链表的节点,谁小取谁
    // 同时小的移动到下一个节点
    if (list1.val > list2.val) {
      mergeList.next = list2;
      list2 = list2.next;
    } else {
      mergeList.next = list1;
      list1 = list1.next;
    }
    mergeList = mergeList.next;
  }
  // 如果其中一个链表当前节点为null,则直接将另一个链表的剩余部分接到结果链表上
  if (!list1) {
    mergeList.next = list2;
    return vNode.next;
  }
  if (!list2) {
    mergeList.next = list1;
    return vNode.next;
  }
};
// @lc code=end

/**
 * ![20211130154038](https://i.loli.net/2021/11/30/z4x2sVZFCgulLSQ.png)
 */
