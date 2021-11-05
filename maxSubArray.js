// 53. 最大子序和

const maxSubArray = (nums) => {
  let max = nums[0], pre = nums[0];
  for(let i=1;i<nums.length;i++){
    pre = Math.max(pre +nums[i], nums[i])
    max = Math.max(max, pre)
  }
  return max;
}
