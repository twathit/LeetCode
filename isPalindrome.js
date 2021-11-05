// 9. 回文数
// https://leetcode-cn.com/problems/palindrome-number/

const isPalindrome = (num) => {
  const max = Math.pow(2, 31) - 1;
  if(num < 0 || (num%10 === 0 && num!==0)) return false;
  let reverseNum = 0;
  while(reverseNum < num) {
    reverseNum = reverseNum * 10 + num % 10;
    num = ~~(num/10)
  }
  if(reverseNum > max) return false;
  if(num == reverseNum || num == ~~(reverseNum/10)) return true;
  else return false;
}

console.log(isPalindrome(34544543))
