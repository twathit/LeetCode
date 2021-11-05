// 买卖股票的最佳时机-121
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  if(prices.length<=1) return 0
  let max = 0;
  let buyPrice = prices[0];
  for(let i=1;i<prices.length;i++){
    let price = prices[i]
    max = Math.max(price-buyPrice, max)
    buyPrice = Math.min(buyPrice, price)
  }
  return max
}
