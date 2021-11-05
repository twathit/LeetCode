const postorderTraversal = (root) => {
  const res = [];
  const postorder = (root) => {
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    res.push(root.val)
  }
  postorder(root);
  return res;
}

const postorderTraversal = (root) => {
  const res = [];
  const stack = [];
  let prev;
  while(root || stack.length){
    while(root){
      stack.push(root);
      root = root.left
    }
    root = stack.pop();
    if(!root.right || root.right == prev){
      res.push(root.val);
      prev = root;
      root = null;
    }else{
      stack.push(root);
      root = root.right;
    }
  }
  return res;
}

const postorderTraversal = (root) => {
  const res = [];
  const stack = [];
  while (root || stack.length){
    while(root){
      stack.push(root);
      res.unshift(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }
  return res;
}
