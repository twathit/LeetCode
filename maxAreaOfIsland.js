// 695. 岛屿的最大面积
// https://leetcode-cn.com/problems/max-area-of-island/

const maxAreaOfIsland = (grid) => {
  let max = 0;
  const row = grid.length;
  const col = grid[0].length;
  const directions = [[0,1],[0,-1],[1,0],[-1,0]];
  const dfs = (i, j) => {
    if(i<0 || j<0 || i===row || j===col || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    let ans = 1;
    for(let [addi, addj] of directions){
      const newi = i + addi;
      const newj = j + addj;
      ans += dfs(newi, newj)
    }
    return ans
  }
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      max = Math.max(max, dfs(i, j))
    }
  }
  return max;
}
