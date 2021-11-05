// 1239. 串联字符串的最大长度
// https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

const maxLength = (arr) => {
  const len = arr.length;
  const dfs = (str, index) => {
    if(index == len) return 0;
    const temp = arr[index];
    for(let s of temp){
      if(str.indexOf(s) !== -1 || temp.indexOf(s) !== temp.lastIndexOf(s)){
        return dfs(str, index + 1);
      }
    }
    return Math.max(dfs(str + temp, index+1) + temp.length, dfs(str, index + 1))
  }
  return dfs('', 0)
}

const maxLength = (arr) => {
  const len = arr.length;
  let max = 0;
  const dfs = (str, index) => {
    if(index == len){
      max = Math.max(max, str.length);
      return;
    }
    const temp = arr[index];
    let isDuplicate = false;
    for(let s of temp){
      if(str.indexOf(s) !== -1 || temp.indexOf(s) !== temp.lastIndexOf(s)){
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate){
      dfs(str + temp, index + 1);
    }
    dfs(str, index + 1)
  }
  dfs('', 0);
  return max;
}
