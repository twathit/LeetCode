const addBinary = (a ,b) => {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');
  let sum = '';
  let carry = 0;
  for(let i=maxLength-1;i>=0;i--){
    let temp = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(temp/2);
    sum = temp%2 + sum;
  }
  if(carry)  sum = carry + sum;
  return sum;
}

console.log(addBinary('11', '1'))
