// 153. 寻找旋转排序数组中的最小值
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while(left < right){
    const mid = Math.floor((left + right) / 2);
    if(nums[mid] < nums[right]){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return nums[left];
}
