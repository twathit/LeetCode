// 54. 螺旋矩阵

const spiralOrder = (matrix) => {
  let res = [];
  while(matrix.length){
    const temp = matrix.shift();
    res = res.concat(temp);
    matrix = rotateMatrix(matrix);
  }
  return res
}

const rotateMatrix = (matrix) => {
  let newMatrix = [];
  const row = matrix.length;
  if(!row) return [];
  const column = matrix[0].length;
  newMatrix = matrix[0].reduce((acc, item, index) => {
    let arr = [];
    for(let i=0;i<row;i++){
      arr.push(matrix[i][column-index-1])
    }
    acc.push(arr);
    return acc
  }, [])
  return newMatrix;
}

console.log(spiralOrder([[]]))
