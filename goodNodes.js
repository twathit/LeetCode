// 1448. 统计二叉树中好节点的数目
// https://leetcode-cn.com/problems/count-good-nodes-in-binary-tree/

const goodNodes = (root) => {
  let ans = 0;
  const dfs = (root, max) => {
    if(!root) return;
    if(root.val >= max) ans ++;
    dfs(root.left, Math.max(max, root.val));
    dfs(root.right, Math.max(max, root.val));
  }
  dfs(root, -Infinity);
  return ans;
}
