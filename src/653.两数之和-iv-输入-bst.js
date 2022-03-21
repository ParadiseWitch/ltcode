/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
 *
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (60.53%)
 * Likes:    342
 * Dislikes: 0
 * Total Accepted:    60.9K
 * Total Submissions: 98.9K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: root = [5,3,6,2,4,null,7], k = 9
 * 输出: true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: root = [5,3,6,2,4,null,7], k = 28
 * 输出: false
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是  [1, 10^4].
 * -10^4 <= Node.val <= 10^4
 * root 为二叉搜索树
 * -10^5 <= k <= 10^5
 * 
 * 
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let set = new Set();
  let flag = false;
  const dfs = (root) => {
    if (!root) { 
      flag = flag || false;
      return;
    }
    if (set.has(k - root.val)) {
      flag = true;
      return;
    };
    set.add(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return flag;
};
// @lc code=end

const main = () => { 
  const tn1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  console.log(tn1);
  console.log(findTarget(tn1, 3));
}
main()