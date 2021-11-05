// 64. 最小路径和
// https://leetcode-cn.com/problems/minimum-path-sum/

const minPathSum = (grid) => {
  const row = grid.length;
  const column = grid[0].length;
  const dp = new Array(row).fill(0).map(x=>new Array(column).fill(0));
  dp[0][0] = grid[0][0];
  for(let i=1;i<row;i++){
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for(let j=1;j<column;j++){
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }
  for(let i=1;i<row;i++){
    for(let j=1;j<column;j++){
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }
  console.log('dp===========', dp)
  return dp[row-1][column-1]
}

console.log(minPathSum([[1,2,3], [4,5,6]]))

setTimeout(() => {
  console.log('setTimeout1');
  Promise.resolve().then(() => {
    console.log('promise1');
  })
})

setTimeout(() => {
  console.log('setTimeout2');
  Promise.resolve().then(() => {
    console.log('promise2');
  })
})
