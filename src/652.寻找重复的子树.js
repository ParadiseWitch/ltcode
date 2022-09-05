/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = new Map();
  const set = new Set();
  let idx = 0
  const dfs = (node) => {
    if(!node) return 0;
    const tri =[node.val, dfs(node.left), dfs(node.right)];
    const hash = tri.toString();
    if(map.has(hash)){
      const pair = map.get(hash);
      set.add(pair[0]);
      return pair[1];
    }else{
      map.set(hash, [node, ++idx]);
      return idx;
    }
  }
  dfs(root);
  return [...set];

};
// @lc code=end

