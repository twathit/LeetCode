// 75. 颜色分类
// https://leetcode-cn.com/problems/sort-colors/

const sortColors = (nums) => {
  const len = nums.length;
  let ptr = 0;
  for(let i=0;i<len;i++){
    if(nums[i] === 0){
      [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
      ptr ++;
    }
  }
  for(let i=0;i<len;i++){
    if(nums[i] === 1){
      [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
      ptr ++;
    }
  }
  return nums;
}

const sortColors = (nums) => {
  const len = nums.length;
  let pl = 0;
  let pr = len-1;
  let i = 0;
  while(i <= pr){
    if(nums[i] === 0){
      [nums[pl], nums[i]] = [nums[i], nums[pl]];
      pl ++;
    }
    while(i<=pr && nums[i] === 2){
      [nums[pr], nums[i]] = [nums[i], nums[pr]];
      pr --;
    }
    i ++;
  }
  return nums;
}
