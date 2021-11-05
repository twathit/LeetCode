// 106. 从中序与后序遍历序列构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

const buildTree = (inorder, postorder) => {
  if(!inorder.length || !postorder.length) return null;
  const node = new TreeNode(postorder.pop());
  const index = inorder.indexOf(node.val);
  node.right = buildTree(inorder.slice(index + 1), postorder);
  node.left = buildTree(inorder.slice(0, index), postorder);
  return node;
}
