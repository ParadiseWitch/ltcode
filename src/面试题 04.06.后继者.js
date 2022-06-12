const TreeNode = require("./utils/TreeNode");

var inorderSuccessor = function (root, p) {
  // 中序遍历
  let ret = [];
  const dfs = (root)=>{
    if(!root) return;
    // 根节点
    ret.push(root.val);
    // 左节点
    dfs(root.left);
    // 右节点
    dfs(root.right)
  }
  dfs(root)
  console.log(ret);
  return ret[ret.indexOf(p)+1] || null
}


const node1 = new TreeNode(1);
const node2 = new TreeNode(2, node1);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3, node2, node4);
const node6 = new TreeNode(6);
const node5 = new TreeNode(5, node3, node6);

const ans = inorderSuccessor(node5, 4);
console.log(ans);