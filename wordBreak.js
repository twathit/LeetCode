// 单词拆分-139
const wordBreak = (s, wordDict) => {
  const len = s.length;
  const wordSet = new Set(wordDict);
  const dp = new Array(len+1).fill(false);
  dp[0] = true;
  for(let i=0;i<=len;i++){
    for(let j=i;j>=0;j--){
      if(dp[j] && wordSet.has(s.substring(j, i))){
        dp[i] = true;
        break
      }
    }
  }
  return dp[len]
}

console.log(wordBreak("catsandog",["cats","dog","sand","and","cat"]))
