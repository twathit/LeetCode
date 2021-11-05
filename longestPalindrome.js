// 5. 最长回文子串
// https://leetcode-cn.com/problems/longest-palindromic-substring/

const longestPalindrome = (s) => {
  let res = s[0];
  let dp = [];
  for(let i=0;i<s.length;i++){
    dp[i] = [];
    for(let j=0;j<=i;j++){
      if(i===j) dp[i][j] = true;
      else if(i-j==1 && s[i]===s[j]) dp[i][j] = true;
      else if(s[i]===s[j] && dp[i-1][j+1]) dp[i][j] = true;
      if(dp[i][j] && i-j+1>res.length){
        res = s.substring(j, i+1)
      }
    }
  }
  return res;
}

console.log(longestPalindrome('babad'))
