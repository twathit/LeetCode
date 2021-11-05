// 38. 外观数列
// https://leetcode-cn.com/problems/count-and-say/

const countAndSay = (n) => {
  if(n === 1) return '1';
  return generateCount(countAndSay(n-1));
}

const generateCount = (str) => {
  let result = '';
  let temp = str[0];
  for(let i=0;i<str.length;i++){
    if(str[i] == str[i+1]){
      temp += str[i+1]
    }else{
      result += temp.length + temp[0]
      temp = str[i+1]
    }
  }
  return result;
}

console.log(countAndSay(3))
