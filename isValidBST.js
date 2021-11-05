// 98. 验证二叉搜索树
// https://leetcode-cn.com/problems/validate-binary-search-tree/

const isValidBST = (root) => {
  const helper = (root, upper, lower) => {
    if(!root) return true;
    if(root.val >= upper || root.val <= lower) return false;
    return helper(root.left, root.val, lower) && helper(root.right, upper, root.val)
  }
  return helper(root, Infinity, -Infinity)
}

const isValidBST = (root) => {
  const dfs = (root) => {
    if(!root) return [true, -Infinity, Infinity];
    const left = dfs(root.left);
    const right = dfs(root.right);
    if(left[0] && right[0] && root.val > left[1] && root.val < right[2]){
      const max = root.right ? Math.max(root.val, right[1]) : root.val;
      const min = root.left ? Math.min(root.val, left[2]) : root.val;
      return [true, max, min]
    }else{
      return [false, -1, -1]
    }
    
  }
  return dfs(root)[0]
}
