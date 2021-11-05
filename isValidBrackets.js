// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/

const isValidBrackets = (str) => {
  const map = {
    '(':')',
    '[':']',
    '{':'}',
  }
  let stack = [];
  for(let s of str) {
    if(map[s]){
      stack.push(map[s])
    }else{
      let value = stack.pop();
      if(value !== s) {
        return false
      }
    }
  }
  return !stack.length
}
