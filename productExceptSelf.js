// 238. 除自身以外数组的乘积
// https://leetcode-cn.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
  const len = nums.length;
  const ans = new Array(len).fill(1);
  let prefix = suffix = 1;
  for(let i=0;i<len;i++){
    ans[i] *= prefix;
    ans[len - i - 1] *= suffix;
    prefix *= nums[i];
    suffix *= nums[len - i - 1];   
  }
  return ans;
}
