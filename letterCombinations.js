// 17. 电话号码的字母组合
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = (digits) => {
  const map = { 
    '2': 'abc', 
    '3': 'def', 
    '4': 'ghi', 
    '5': 'jkl', 
    '6': 'mno', 
    '7': 'pqrs', 
    '8': 'tuv', 
    '9': 'wxyz' 
  };
  const res = [];
  if(digits.length===0) return res;
  const dfs = (str, index) => {
    if(index == digits.length){
      res.push(str);
      return;
    }
    const digit = map[digits[index]];
    for(let i=0;i<digit.length;i++){
      dfs(str + digit[i], index + 1)
    }
  }
  dfs('', 0);
  return res;
}

console.log(letterCombinations('23'))
