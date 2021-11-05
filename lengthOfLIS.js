// 300. 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

const lengthOfLIS = (nums) => {
  const dp = new Array(nums.length).fill(1);
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<i;j++){
      if(nums[i] > nums[j]){
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  let res = 0;
  for(let i=0;i<dp.length;i++){
    res = Math.max(res, dp[i])
  }
  return res
}
