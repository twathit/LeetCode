// 227. 基本计算器 II
// https://leetcode-cn.com/problems/basic-calculator-ii/

const calculate = (s) => {
  s = s.trim();
  const n = s.length;
  let preSign = '+';
  let num = 0;
  const stack = [];
  for(let i=0;i<n;i++){
    if(/\d/.test(s[i])){
      num = num * 10 + parseInt(s[i]);
    }
    if(/[\+\-\*\/]/.test(s[i]) || i === n-1){
      switch(preSign){
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(Math.trunc(stack.pop() / num));
          break;
      }
      preSign = s[i];
      num = 0
    }
  }
  return stack.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

console.log(calculate("3+2*2"))
