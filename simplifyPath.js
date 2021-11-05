// 71. 简化路径
// https://leetcode-cn.com/problems/simplify-path/

const simplifyPath = (path) => {
  const stack = [];
  const arr = path.split('/');
  for(let i=0;i<arr.length;i++){
    if(arr[i] === '.' || arr[i] === ''){
      continue;
    }else if(arr[i] === '..'){
      stack.pop();
    }else{
      stack.push(arr[i]);
    }
  }
  return '/' + stack.join('/');
}
