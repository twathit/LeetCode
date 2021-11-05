// 69. x 的平方根
// https://leetcode-cn.com/problems/sqrtx/

const mySqrt = (x) => {
  let l = 0;
  let r = x;
  let ans;
  while(l <= r){
    let mid = Math.floor((l + r) / 2);
    if(mid * mid <= x){
      ans = mid;
      l = mid + 1;
    } 
    else {
      r = mid - 1
    }
  }
  return ans
}

// const mySqrt = x => {
//   let [low, high] = [0, x];
//   while (low <= high) {
//       const mid = (low + high) >> 1;
//       console.log(low, high, mid)
//       if (mid * mid > x) {
//           high = mid - 1;
//       } else if (mid * mid < x) {
//           low = mid + 1;
//       } else {
//           return mid;
//       }
//   }
//   return high;
// };

console.log(mySqrt(8))
