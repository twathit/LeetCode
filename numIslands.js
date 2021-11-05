// 200. 岛屿数量
// https://leetcode-cn.com/problems/number-of-islands/

const numIslands = (grid) => {
    const directions = [[0,1], [1,0], [0, -1], [-1, 0]];
    const row = grid.length;
    const column = grid[0].length;
    let count = 0;
    const dfs = (i, j) => {
        grid[i][j] = '0';
        for(let direction of directions){
            newi = i + direction[0];
            newj = j + direction[1];
            if(newi >= 0 && newi < row && newj >=0 && newj <column && grid[newi][newj] !== '0'){
                dfs(newi, newj);
            }
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(grid[i][j]==='1'){
                count ++;
                dfs(i, j)
            }
        }
    }
    return count;
}