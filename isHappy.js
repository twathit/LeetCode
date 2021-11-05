// 202. 快乐数
// https://leetcode-cn.com/problems/happy-number/

const isHappy = (n) => {
  const set = new Set();
  while(n!==1){
    set.add(n);
    n = getNext(n);
    if(set.has(n)) return false;   
  }
  return true;
}

const getNext = (n) => {
  const nums = String(n).split('');
  let sum = 0;
  for(let num of nums){
    sum += Math.pow((+num), 2)
  }
  return sum;
}
