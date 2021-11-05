// 14. 最长公共前缀
// https://leetcode-cn.com/problems/longest-common-prefix/

const longestCommonPrefix = function(strs) {
  let arr = [];
  let result = "";
  for(let i = 0; i < strs.length; i++){
      arr.push(strs[i].length);
  }
  // 排序，找出长度最短的元素（可以不进行排序，区别就是节约一些时间多消耗一些内存）
  arr.sort((a, b) => a - b);
  for(let j = 0; j < arr[0]; j++){
      let s = strs[0][j]; // 也是用第一项来进行对比
      if(strs.every(val => val[j] == s)){ // val就是数组中的每一个元素
          result += s;
      }else{
          break;
      }
  }
  return result;
};
