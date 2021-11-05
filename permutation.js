// 剑指 Offer 38. 字符串的排列
// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

const permutation = (s) => {
  let res = [''];
  for(const char of s){
    const set = new Set();
    for(const str of res){
      for(let i = 0;i<=str.length;i++){
        const newStr = str.slice(0, i) + char + str.slice(i);
        if(!set.has(newStr)){
          set.add(newStr);
        }
      }
    }
    res = [...set]
  }
  return res;
}

const permutation2 = (s) => {
  let res = [];
  const len = s.length;
  const visited = [];
  const arr = Array.from(s).sort();
  const dfs = (path) => {
    if(path.length === len){
      res.push(path.join(''));
      return;
    }
    for(let i=0;i<len;i++){
      if(visited[i] || (i>0 && arr[i] === arr[i-1] && !visited[i-1])) continue;
      visited[i] = true;
      dfs([...path, arr[i]]);
      visited[i] = false;
    }
  }
  dfs([]);
  return res;
}

console.log(permutation2('aab'))
