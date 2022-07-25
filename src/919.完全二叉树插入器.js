/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
 */
var CBTInserter = function (root) {
    this.cnt = 0;
    this.root = root;

    const queue = [];
    queue.push(root);

    while (queue.length) {
        ++this.cnt;
        const node = queue.shift();
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
};

CBTInserter.prototype.insert = function (val) {
    ++this.cnt;
    const child = new TreeNode(val);
    let node = this.root;
    const highbit = ('' + this.cnt.toString(2)).length - 1;
    for (let i = highbit - 1; i >= 1; --i) {
        if ((this.cnt & (1 << i)) !== 0) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    if ((this.cnt & 1) !== 0) {
        node.right = child;
    } else {
        node.left = child;
    }
    return node.val;
};

CBTInserter.prototype.get_root = function () {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

