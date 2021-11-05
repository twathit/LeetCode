// 15. 三数之和
// https://leetcode-cn.com/problems/3sum/

const threeSum = (nums) => {
  const ans = [];
  if(nums == null || nums.length < 3) return ans;
  nums.sort((a,b) => a-b);
  for(let i=0;i<nums.length;i++){
    const cur = nums[i];
    if(cur>0) break;
    if(i>0 && nums[i] == nums[i-1]) continue;
    let l = i+1;
    let r = nums.length-1;
    while(l<r){
      const sum = cur + nums[l] + nums[r];
      if(sum==0){
        ans.push([cur, nums[l], nums[r]])
        while(l<r && nums[l] == nums[l+1]) l++;
        while(l<r && nums[r] == nums[r-1]) r--;
        l++;
        r--;
      }else if(sum < 0){
        l++;
      }else{
        r--;
      }
    }
  }
  return ans;
}
