// 322. 零钱兑换
// https://leetcode-cn.com/problems/coin-change/

const coinChange = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = [0];
    for(let coin of coins){
        for(let i=1;i<=amount;i++){
            if(i>=coin){
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}