// 171. Excel表序列号
// https://leetcode-cn.com/problems/excel-sheet-column-number/

const titleToNumber = (columnTitle) => {
  let ans = 0;
  for(let i=0;i<columnTitle.length;i++){
    ans = ans * 26 + (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1);
  }
  return ans;
}
