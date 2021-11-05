/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 let threeSumClosest = function (nums, target) {
  let length = nums.length
  if (length === 3) {
    return getSum(nums)
  }
  // 先升序排序 此为解题的前置条件
  nums.sort((a, b) => a - b)

  let min = Infinity // 和 target 的最小差
  let res

  for (let i=0; i<length-2; i++){
    let left = i + 1;
    let right = length - 1;
    let sum = 0;
    while(left < right) {
      sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);
      if(sum > target) {
        right --
      } else if(sum < target) {
        left ++
      } else {
        return sum
      }
      if(min > diff){
        min = diff
        res = sum
      }
    }
  }
  return res
}

function getSum(nums) {
  return nums.reduce((total, cur) => total + cur, 0)
}

console.log(threeSumClosest([-1,2,1,-4], 1))
