// 34. 在排序数组中查找元素的第一个和最后一个位置
// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const searchRange = (nums, target) => {
  const findLeft = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
      const mid = Math.floor((l + r) / 2);
      if(nums[mid] >= target){
        r = mid - 1;
      }else{
        l = mid + 1;
      }
    }
    return l;
  }
  if(nums[findLeft(nums, target)] !== target) return [-1, -1]
  else return [findLeft(nums, target), findLeft(nums, target + 1) - 1]
}

console.log(searchRange([1,3,4,4,5,7], 4))
