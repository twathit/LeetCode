// 大数相加
// 415. 字符串相加
// https://leetcode-cn.com/problems/add-strings/
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

// 函数柯里化，要求实现
// add(1,2,3).sumof()     //6
// add(1,2)(3)(4).sumof()  //10
// add(1)(2)(3).sumof()   //6
function add() {
  add.nums = add.nums ? [...add.nums, ...arguments] : [...arguments];
  return add;
}

add.sumOf = function(){
  return add.nums.reduce((a, b) => {
    return a+b
  }, 0)
}

console.log(add(1,2)(3)(4,5).sumOf())
