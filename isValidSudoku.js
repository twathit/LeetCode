// 36. 有效的数独
// https://leetcode-cn.com/problems/valid-sudoku/

const isValidSudoku = (board) => {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      const num = board[i][j];
      rows[i][num-1]++;
      cols[j][num-1]++;
      subboxes[Math.floor(i/3)][Math.floor(j/3)][num-1]++;
      if(rows[i][num-1]>1 || cols[j][num-1]>1 || subboxes[Math.floor(i/3)][Math.floor(j/3)][num-1]>1){
        return false;
      }
    }
  }
  return true;
}
