const findDiagonalOrder = (nums) => {
  if(!nums.length) return [];
  const arr = [];
  const res = [];
  for(let i=0;i<nums.length;i++){
    const row = nums[i];
    for(let j=0;j<row.length;j++){
      arr[i+j] ? arr[i+j].unshift(nums[i][j]) : arr[i+j] = [nums[i][j]];
    }
  }
  for(const row of arr){
    res.push(...row);
  }
  return res;
}

const printArray = (arr) => {
  const row = arr.length;
  const col = arr[0].length;
  let res = [];
  const queue = [[0, 0]];
  while(!!queue.length){
    let len = queue.length;
    for(let l=0;l<len;l++){
      const [i, j] = queue.shift();
      res.push(arr[i][j]);
      if(i == 0 && j + 1 < col){
          queue.push([i, j+1]);
      }
      if(i + 1 < row){
          queue.push([i+1, j]);
      }
    }
  }
  return res;
}

console.log(findDiagonalOrder([[6],[8],[6,1,6,16]]))
console.log(printArray([
  [1,2,3],
  [4,5,6],
  [7,8,9]]
))
