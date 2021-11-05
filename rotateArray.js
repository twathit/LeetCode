// 189. 旋转数组
// https://leetcode-cn.com/problems/rotate-array/

const rotate = (nums, k) => {
  const len = nums.length;
  k = k%len;
  reverse(nums, 0, len-1);
  reverse(nums, 0, k-1);
  reverse(nums, k, len-1);
}

const reverse = (nums, start, end) => {
  while(start < end){
    [nums[start], nums[end]] = [nums[end], numd[start]]
    start ++
    end --
  }
}
