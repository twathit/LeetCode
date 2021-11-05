const reverse = (num) => {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  let reverseNum = 0;
  while(num !== 0) {
    reverseNum = 10 * reverseNum + (num % 10);
    num = ~~(num/10);
  }
  if(reverseNum > max || reverseNum < min) return 0
  return reverseNum
}

console.log(reverse(-153))
