// 111.二叉树的最小深度

const minDepth = (root) => {
  if(!root) return 0;
  if(!root.left){
    return minDepth(root.right) + 1;
  }else if(!root.right){
    return minDepth(root.left) + 1;
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
}
