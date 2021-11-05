// 152. 乘积最大子数组
// https://leetcode-cn.com/problems/maximum-product-subarray/

const maxProduct = (nums) => {
  let ans = min = max = nums[0];
  for(let i=1;i<nums.length;i++){
    const temp1 = max * nums[i];
    const temp2 = min * nums[i];
    max = Math.max(temp1, temp2, nums[i]);
    min = Math.min(temp1, temp2, nums[i]);
    ans = Math.max(ans, max);
  }
  return ans;
}

console.log(maxProduct([-4,-3,-2]))
