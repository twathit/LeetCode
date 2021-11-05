// 74. 搜索二维矩阵
// https://leetcode-cn.com/problems/search-a-2d-matrix/

const searchMatrix = (matrix, target) => {
  const row = matrix.length;
  if(row === 0) return false;
  const col = matrix[0].length;
  let l = 0;
  let r = row * col - 1;
  while(l <= r){
    let mid = Math.floor((l + r)/2);
    const val = matrix[Math.floor(mid/col)][mid%col];
    if(val === target){
      return true;
    }else if(val>target){
      r = mid - 1;
    }else{
      l = mid + 1;
    }
  }
  return false;
}
