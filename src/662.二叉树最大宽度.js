/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */
const TreeNode = require("./utils/TreeNode");


// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  /** JS 存在计数溢出的问题，使用 BigInt，BigInt 不能调用 Math 中的方法。 */
  let q = [{
    node: root,
    index: 1n,
  }];
  let ans = 1;
  while (q.length > 0) {
    const curW = q[q.length - 1].index - q[0].index + 1n;
    ans = ans > curW ? ans : curW;
    temp = [...q];
    q = [];
    for (let i =0;i<temp.length;i++) {
      let e = temp[i];
      if (e?.node?.left) {
        q.push({
          node: e.node.left,
          index: e.index * 2n,
        })
      }
      if (e?.node?.right) {
        q.push({
          node: e.node.right,
          index: e.index * 2n + 1n,
        })
      }
    }
  }
  return ans;
};
// @lc code=end

const main = () => {
  const node6 = new TreeNode(6, null, null);
  const node5 = new TreeNode(5, node6, null);
  const node3 = new TreeNode(3, node5, null);
  const node7 = new TreeNode(7, null, null);
  const node9 = new TreeNode(9, node7, null);
  const node2 = new TreeNode(2, null, node9);
  const node1 = new TreeNode(1, node3, node2);
  let w = widthOfBinaryTree(node1);
  console.log(w);
}

main()