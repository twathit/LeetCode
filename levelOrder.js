// 102. 二叉树的层序遍历

const levelOrder = (root) => {
  const res = [];
  if(!root) return res;
  let queue = [root];
  while(queue.length){
    const len = queue.length;
    res.push([])
    for(let i=0;i<len;i++){
      const node = queue.shift();
      res[res.length-1].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
}

const levelOrder = (root) => {
  const res = [];
  if(!root) return res;
  const dfs = (node, level, res) => {
    if(!res[level]){
      res[level] = [node.val];
    } else {
      res[level].push(node.val);
    }
    node.left && dfs(node.left, level+1, res);
    node.right && dfs(node.right, level+1, res);
  }
  dfs(root, 0, res);
  return res;
}
