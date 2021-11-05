// 950. 按递增顺序显示卡牌

// https://leetcode-cn.com/problems/reveal-cards-in-increasing-order/

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13]

const deckRevealedIncreasing = function(deck) {
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

console.log(sortPoke([2,3,5,7,11,13,17]))
