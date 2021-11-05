// 191. 位1的个数
// https://leetcode-cn.com/problems/number-of-1-bits/

const hammingWeight = (n) => {
  let ret = 0;
  while(n){
    n &= n-1;
    ret ++;
  }
  return ret;
}
