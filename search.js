// 33. 搜索旋转排序数组
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
  if(!nums) return -1;
  const len = nums.length;
  let l = 0;
  let r = len -1;
  while(l <= r){
    let mid = Math.floor((l+r)/2)
    if(nums[mid] === target) return mid;
    else if(nums[0] <= nums[mid]){
      if(target >= nums[0] && target < nums[mid]){
        r = mid -1;
      }else{
        l = mid + 1;
      }
    }else{
      if(target > nums[mid] && target <= nums[len-1]){
        l = mid + 1;
      }else{
        r = mid - 1;
      }
    }
  }
  return -1;
}
