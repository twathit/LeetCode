// 72. 编辑距离

const minDistance = (word1, word2) => {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1+1).fill(0).map(x => new Array(len2+1).fill(0))
  for(let i=1;i<=len1;i++){
    dp[i][0] = i;
  }
  for(let j=1;j<=len2;j++){
    dp[0][j] = j;
  }
  for(let i=1;i<=len1;i++){
    for(let j=1;j<=len2;j++){
      const add1 = dp[i-1][j] + 1;
      const add2 = dp[i][j-1] + 1;
      let change = dp[i-1][j-1];
      if(word1[i-1] !== word2[j-1]){
        change += 1;
      }
      dp[i][j] = Math.min(add1, add2, change);
      console.log('i=',i,'j=',j,'dp=', dp[i][j])
    }
  }
  return dp[len1][len2]
}

console.log(minDistance('', 'a'));
