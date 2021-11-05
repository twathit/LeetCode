// 283. 移动零

const moveZeroes = (nums) => {
  let l=0,r=0;
  while(r<nums.length){
    if(nums[r] !== 0){
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l+=1;
    }
    r+=1
  }
  return nums
}
