// 48. 旋转图像
// https://leetcode-cn.com/problems/rotate-image/

const rotate = (matrix) => {
  for(let i=0;i<matrix.length;i++){
    for(let j=i;j<matrix.length;j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix.map(item => item.reverse());
}
