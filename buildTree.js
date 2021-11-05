// 105. 从前序与中序遍历序列构造二叉树
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const buildTree = (preorder, inorder) => {
  if(!preorder.length || !inorder.length) return null;
  const node = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder.shift());
  node.left = buildTree(preorder, inorder.slice(0, index));
  node.right = buildTree(preorder, inorder.slice(index + 1));
  return node;
}
