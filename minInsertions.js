// 1312. 让字符串成为回文串的最少插入次数
// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/

const minInsertions = (s) => {
  const len = s.length;
  const t = s.split('').reverse().join('');
  const dp = new Array(len+1).fill(0).map(() => new Array(len+1).fill(0))
  for(let i=1;i<=len;i++){
    for(let j=1;j<=len;j++){
      if(s[i-1] === t[j-1]){
        dp[i][j] = dp[i-1][j-1] + 1
      }else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return len - dp[len][len]
}


console.log(minInsertions('leetcode'))
