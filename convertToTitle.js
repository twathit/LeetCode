// 168. Excel表列名称
// https://leetcode-cn.com/problems/excel-sheet-column-title/

const convertToTitle = (columnNumber) => {
  let ans = [];
  while(columnNumber > 0) {
    columnNumber--;
    ans.unshift(String.fromCharCode(columnNumber%26 + 'A'.charCodeAt()))
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ans.join('');
}

console.log(convertToTitle(701))
