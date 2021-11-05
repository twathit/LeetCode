// 402. 移掉 K 位数字
// https://leetcode-cn.com/problems/remove-k-digits/

const removeKdigits = (num, k) => {
  const n = num.length;
  const stack = [];
  for(let i=0;i<n;i++){
    while(stack.length && stack[stack.length-1]>num[i] && k){
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  for(;k>0;k--){
    stack.pop();
  }
  let ans = '';
  let isLeadZero = true;
  for(let dig of stack){
    if(isLeadZero && dig === '0'){
      continue;
    }
    isLeadZero = false;
    ans += dig;
  }
  return !!ans ? ans : '0';
}
