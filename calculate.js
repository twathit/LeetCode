// 224. 基本计算器
// https://leetcode-cn.com/problems/basic-calculator/

const calculate = (s) => {
  const n = s.length;
  const stack = [1];
  let preSign = 1;
  let ans = 0;
  for(let i=0;i<n;i++){
    if(s[i] !== ' '){
      switch(s[i]){
        case '+':
          preSign = stack[stack.length-1];
          break;
        case '-':
          preSign = -stack[stack.length-1];
          break;
        case '(':
          stack.push(preSign);
          break;
        case ')':
          stack.pop();
          break;
        default:
          let num = 0;
          while(i<n && /\d/.test(s[i])){
            num = num*10 + parseInt(s[i]);
            i++
          }
          !/\d/.test(s[i]) && i--
          ans += preSign * num;
      }
    }
  }
  return ans;
}

console.log(calculate(" 2-1 + 2 "))
