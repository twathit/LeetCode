// 1909. 删除一个元素使数组严格递增
// https://leetcode-cn.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

const canBeIncreasing = (nums) => {
  let count = 0;
  for(let i=1;i<nums.length;i++){
    if(nums[i] <= nums[i-1]){
      if(i > 1 && nums[i] <= nums[i-2]){
        nums[i] = nums[i-1]
      }
      count ++
    }
    if(count > 1) return false;
  }
  return true;
}

console.log(canBeIncreasing([1,2,10,5,7]))
