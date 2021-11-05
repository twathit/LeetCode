// 198. 打家劫舍
// https://leetcode-cn.com/problems/house-robber/

const rob = (nums) => {
  const len = nums.length;
  if(!len) return 0;
  let memo = Array(len);
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for(let i=2;i<nums.length; i++){
    memo[i] = Math.max(memo[i-2] + nums[i], memo[i-1])
  }
  return memo[len-1]
}

console.log(rob([2,7,9,3,1]))
