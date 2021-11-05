// 277. 搜寻名人
// https://leetcode-cn.com/problems/find-the-celebrity/

/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    const row = new Array(n).fill(0);
    const col = new Array(n).fill(0);
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(knows(i, j)){
          row[i] += 1;
          col[j] += 1;
        }
      }
    }
    for(let i=0;i<n;i++){
      if(row[i] === 1 && col[i] === n){
        return i
      }
    }
    return -1;
  };
};

// 方法二

var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    let candidate = 0;
    for(let i=1;i<n;i++){
      if(knows(candidate, i)) candidate = i;
    }
    for(let i=0;i<n;i++){
      if(i<candidate && knows(candidate, i) || !knows(i, candidate)) return -1
    }
    return candidate;
  };
};
