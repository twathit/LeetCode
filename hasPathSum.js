// 路径总和-112
// https://leetcode-cn.com/problems/path-sum/

const hasPathSum = (root, sum) => {
  if(!root) return false;
  if(!root.left && !root.right) {
    return root.val === sum;
  }
  return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
}
