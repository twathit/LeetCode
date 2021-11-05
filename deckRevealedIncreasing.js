// 950. 按递增顺序显示卡牌
// https://leetcode-cn.com/problems/reveal-cards-in-increasing-order/

var deckRevealedIncreasing = function(deck) {
  let res = [];
  deck.sort((a,b) => a-b);
  while(!!deck.length){
      if(res.length){
          const temp = res.pop();
          res.unshift(temp)
      }
      const t = deck.pop();
      res.unshift(t)
  }
  
  return res;
};
