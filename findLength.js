// 最长重复子数组-718
// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/

const findLength = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let max = 0;
  let dp = Array(len1+1).fill(0).map(x=>Array(len2+1).fill(0));
  for(let i=1;i<=len1;i++){
    for(let j=1;j<=len2;j++){
      if(nums1[i-1] === nums2[j-1]){
        dp[i][j] = dp[i-1][j-1] + 1;
        max = Math.max(dp[i][j], max)
      }
    }
  }
  return max
}

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))
