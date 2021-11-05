// 240. 搜索二维矩阵 II
// https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

const searchMatrix = (matrix, target) => {
  const height = matrix.length;
  if(!height || !matrix[0].length) return false;
  const width = matrix[0].length;
  let row = height - 1;
  let col = 0;
  while(row >= 0 && col < width){
    if(matrix[row][col] > target){
      row --;
    }else if (matrix[row][col] < target){
      col ++;
    }else{
      return true;
    }
  }
  return false;
}
