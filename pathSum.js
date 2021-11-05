// 113. 路径总和 II
// https://leetcode-cn.com/problems/path-sum-ii/

const pathSum = (root, targetSum) => {
  const res = [];
  const path = [];
  const dfs = (root, targetSum) => {
    if(!root) return;
    path.push(root.val);  
    if(!root.left && !root.right && targetSum === root.val){
      res.push([...path]);
    }   
    dfs(root.left, targetSum-root.val);
    dfs(root.right, targetSum-root.val);
    path.pop();
  }
  dfs(root, targetSum);
  return res;
}
