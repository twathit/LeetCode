// 43. 字符串相乘
// https://leetcode-cn.com/problems/multiply-strings/

const multiply = (num1, num2) => {
  if(num1 === '0' || num2 === '0') return '0';
  const m = num1.length;
  const n = num2.length;
  const addArr = new Array(m + n).fill(0);
  for(let i=m-1;i>=0;i--){
    const x = Number(num1[i]);
    for(let j=n-1;j>=0;j--){
      addArr[i+j+1] += x * Number(num2[j]);
    }
  }
  for(let i=m+n-1;i>0;i--){
    addArr[i-1] += Math.floor(addArr[i]/10);
    addArr[i] = addArr[i]%10;
  }
  return addArr[0] === 0 ? addArr.slice(1).join('') : addArr.join('');
}

console.log(multiply('2', '3'))
