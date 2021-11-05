// 104. 二叉树的最大深度

const maxDepth = (root) => {
  if(!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
