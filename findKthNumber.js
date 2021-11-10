// 440. 字典序的第K小数字
// https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/

const findKthNumber = (n, k) => {
  let result = 1;
  k = k-1;
  while(k>0){
    let steps = 0;
    let first = result;
    let last = first + 1;
    while(first<=n){
      steps += Math.min(n+1, last) - first;
      first *= 10;
      last *= 10;
    }
    if(steps<=k){
      result +=1;
      k -= steps;
    }else{
      result *= 10;
      k -= 1;
    }
  }
  return result;
}
