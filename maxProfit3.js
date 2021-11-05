// 309. 最佳买卖股票时机含冷冻期
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

const maxProfit = (prices) => {
  let max = 0;
  if(!prices.length) return max;
  let [f0, f1, f2] = [-prices[0], 0, 0];
  for(let i=1;i<prices.length;i++){
    const newF0 = Math.max(f0, f2 - prices[i]);
    const newF1 = f0 + prices[0];
    const newF2 = Math.max(f1, f2);
    [f0, f1, f2] = [newF0, newF1, newF2];
  }
  max = Math.max(f1, f2);
  return max;
}
