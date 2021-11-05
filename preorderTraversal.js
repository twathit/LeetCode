// 144. 二叉树的前序遍历

const preorderTraversal = (root) => {
  const res = [];
  const preorder = (root) => {
    if(!root) return;
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  preorder(root);
  return res;
}

const preorderTraversal = (root) => {
  const res = [];
  const stack = [];
  while (stack.length || root) {
    while(root){
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
}
