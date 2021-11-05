// 674. 最长连续递增序列
// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

const findLengthOfLCIS = (nums) => {
  let max = 0;
  if(nums.length==1) return 1;
  let start = 0;
  for(let i=1;i<nums.length;i++){
    if(nums[i] <= nums[i-1]){
      start = i;
    }
    max = Math.max(max, i-start+1)
  }
  return max;
}
