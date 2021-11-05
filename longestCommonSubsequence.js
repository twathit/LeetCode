// 1143. 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/

const longestCommonSubsequence = (text1, text2) => {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = Array(len1+1).fill(0).map(x=>Array(len2+1).fill(0));
  for(let i=1;i<=len1;i++){
    for(let j=1;j<=len2;j++){
      if(text1[i-1]===text2[j-1]){
        dp[i][j] = 1+dp[i-1][j-1]
      }else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return dp[len1][len2]
}

console.log(longestCommonSubsequence('abcde', 'ace'))
