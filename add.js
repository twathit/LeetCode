// 大数相加
const add = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let temp =  0;
  let carry = 0;
  let sum = '';

  for(let i=maxLength-1; i>=0; i--){
    temp = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(temp/10)
    sum = temp%10 + sum
  }
  if(carry===1) sum = '1' + sum
  return sum
}

console.log(add('9007199254740991', '1234567899999999999'))
