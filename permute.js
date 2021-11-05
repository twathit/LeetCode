// 46. 全排列
// https://leetcode-cn.com/problems/permutations/

const permute = (nums) => {
  if(!nums) return [];
  const res = [];
  const dfs = (path) => {
    if(path.length === nums.length){
      res.push(path);
      return;
    }
    for(let n of nums){
      if(path.includes(n)) continue;
      dfs([...path, n])
    }
  }
  dfs([])
  return res;
}
