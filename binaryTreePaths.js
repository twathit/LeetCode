// 二叉树的所有路径-257
// https://leetcode-cn.com/problems/binary-tree-paths/

const binaryTreePaths = (root) => {
  let res = [];
  if(!root) return res;
  if(!root.left && !root.right) {
    return [`${root.val}`];
  }

  const leftPath = binaryTreePaths(root.left);
  const rightPath = binaryTreePaths(root.right);

  leftPath.forEach(path => {
    res.push(`${root.val}->${path}`)
  })
  rightPath.forEach(path => {
    res.push(`${root.val}->${path}`)
  })

  return res
}
