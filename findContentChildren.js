// 455. 分发饼干
// https://leetcode-cn.com/problems/assign-cookies/

/**
 * @param {number[]} g  // 孩子
 * @param {number[]} s // 饼干
 * @return {number}
 */
 const findContentChildren = function (g, s) {
   g = g.sort((a, b) => a - b);
   s = s.sort((a, b) => a - b);
   let total = 0;
   for(let i=0; i<s.length; i++){
    if(s[i] >= g[total]) total ++
    if(total == g.length) return total
   }
   return total
 }

 console.log(findContentChildren([1, 2], [1, 2, 3]))
 console.log(findContentChildren([1, 4], [1, 2, 3]))
 console.log(findContentChildren([1, 3, 7], [1, 2, 3]))
