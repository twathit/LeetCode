// 611. 有效三角形的个数

const triangleNumber = (nums) => {
  let res = 0;
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for(let i=0;i<len;i++){
    let k = i+1;
    for(let j=i+1;j<len;j++){
      while(nums[k+1] < nums[i] + nums[j] && k+1 < len){
        k++
      }
      res += Math.max(k-j, 0);
    }
  }
  return res;
}

console.log(triangleNumber([2,2,3,4]))
