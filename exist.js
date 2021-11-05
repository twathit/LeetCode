// 79. 单词搜索
// https://leetcode-cn.com/problems/word-search/

const exist = (board, word) => {
  const row = board.length;
  if(!row) return false;
  const column = board[0].length;
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];

  const check = (i, j, k, str) => {
    if(board[i][j] !== str[k]) return false;
    if(k === word.length-1) return true;
    let temp = board[i][j];
    board[i][j]=false;
    for(let item of directions) {
      const newi = i+item[0];
      const newj = j+item[1];
      if(newi>=0 && newi<row && newj>=0 && newj<column && board[newi][newj]){
        if(check(newi, newj, k+1, str)){
          return true;
        }
      }
    }
    board[i][j] = temp;
    return false;
  }

  for(let i=0;i<row;i++){
    for(let j=0;j<column;j++){
      const res = check(i, j, 0, word);
      if(res) return true;
    }
  }

  return false;
}

console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB"))
