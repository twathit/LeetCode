// 73. 矩阵置零
// https://leetcode-cn.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;
  let flagCol0 = false;
  for(let i=0;i<row;i++){
    if(matrix[i][0] === 0){
      flagCol0 = true;
    }
    for(let j=1;j<col;j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  console.log(matrix)
  for(let i=row-1;i>=0;i--){
    for(j=1;j<col;j++){
      if(!matrix[i][0] || !matrix[0][j]){
        matrix[i][j] = 0;
      }
    }
  }
  if(flagCol0){
    for(let i=0;i<row;i++){
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

console.log(setZeroes([
  [1,2,3,4],
  [5,0,7,8],
  [0,10,11,12],
  [13,14,15,0]
]))
