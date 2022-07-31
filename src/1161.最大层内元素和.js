/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
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
 * @return {number}
 */
var maxLevelSum = function (root) {
    const sum = [];
    const dfs = (node, level) => {
        if (level === sum.length) {
            sum.push(node.val);
        } else {
            sum.splice(level, 1, sum[level] + node.val);
        }
        if (node.left) {
            dfs(node.left, level + 1);
        }
        if (node.right) {
            dfs(node.right, level + 1);
        }
    }
    dfs(root, 0);
    let ans = 0;
    for (let i = 0; i < sum.length; ++i) {
        if (sum[i] > sum[ans]) {
            ans = i;
        }
    }
    return ans + 1; // 层号从 1 开始
};
// @lc code=end

