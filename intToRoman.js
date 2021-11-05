// 12. 整数转罗马数字
// https://leetcode-cn.com/problems/integer-to-roman/

const intToRoman = (num) => {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let roman = '';
  for(const [value, symbol] of valueSymbols){
    while(num >= value){
      num -= value;
      roman += symbol;
    }
    if(num === 0){
      break;
    }
  }
  return roman;
}
