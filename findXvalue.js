// 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
// X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
// 现在需要你找出数列a的所有区间中, X值最大的那个区间;
// 如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;

// 作者：要加油啊
// 链接：https://juejin.cn/post/6844904088337907720
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const findXvalue = (len, nums) => {
  let max = 0;
  for(let i=0;i<len;i++){
    let value = nums[i];
    let left = i-1;
    let right = i+1;
    let sum = value;
    while(left>=0){
      if(nums[left]>=value){
        sum += nums[left]
        left --
      } else {
        break
      }
    }
    while(right<len){
      if(nums[right]>=value){
        sum += nums[right]
        right ++
      } else {
        break
      }
    }
    max = Math.max(max, sum*value)
  }
  return max
}

console.log(findXvalue(10, [81, 87, 47, 59, 81, 18, 25, 40, 56, 0]))
