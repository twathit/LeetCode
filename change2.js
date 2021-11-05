// 零钱兑换 II-518
// https://leetcode-cn.com/problems/coin-change-2/

const change2 = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for(let coin of coins) {
    for(let i=1;i<=amount;i++){
      if(i>=coin){
        dp[i] += dp[i-coin]
      }      
    }
  }
  return dp[amount]
}
