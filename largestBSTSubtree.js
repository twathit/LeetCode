// 333. 最大 BST 子树
// https://leetcode-cn.com/problems/largest-bst-subtree/

const largestBSTSubtree = (root) => {
  let res = 0;
  const dfs = (root) => {
    if(!root) return [true, -Infinity, Infinity, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    if(left[0] && right[0] && root.val > left[1] && root.val < right[2]){
      const ans = left[3] + right[3] + 1;
      res = Math.max(res, ans);
      const max = root.right ? Math.max(right[1], root.val) : root.val;
      const min = root.left ? Math.min(left[2], root.val) : root.val;
      return [true, max, min, ans];
    }else{
      return [false, -1, -1, -1];
    }
  }
  dfs(root);
  return res;
}
