// 39. 组合总和
// https://leetcode-cn.com/problems/combination-sum/

const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (target, combine, index) => {
    if(index === candidates.length) return;
    if(target === 0){
      res.push(combine);
      return;
    }
    dfs(target, combine, index + 1)
    if(target - candidates[index] >= 0){
      dfs(target - candidates[index], [...combine, candidates[index]], index);
    }
  }
  dfs(target, [], 0)
  return res;
}

const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (start, temp, sum) => {
    if (sum >= target) {        // 爆掉了，不用继续选数了
      if (sum == target) {      // 加入解集
        res.push(temp.slice()); // temp的拷贝
      }
      return;                   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) { // 枚举出选择，从start开始
      temp.push(candidates[i]);          // 加入“部分解”
      dfs(i, temp, sum + candidates[i]); // 往下继续选择，同时sum累加上当前数字
      temp.pop();                        // 撤销选择
    }
  };
  dfs(0, [], 0);
  return res;
};

console.log(combinationSum([2,3,6,7], 7))
