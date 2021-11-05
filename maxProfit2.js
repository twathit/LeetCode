// 122. 买卖股票的最佳时机 II
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
  let max = 0;
  for(let i=1;i<prices.length;i++){
    if(prices[i] > prices[i-1]){
      max += prices[i] - prices[i-1]
    }
  }
  return max;
}
