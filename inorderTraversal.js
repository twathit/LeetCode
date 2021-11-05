// 94. 二叉树的中序遍历

const inorderTraversal = (root) => {
  const res = [];
  const inorder = (root) => {
    if(!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root)
  return res;
}

const inorderTraversal = (root) => {
  const res = [];
  const stack = [];
  while(root || stack.length){
    while(root){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}
