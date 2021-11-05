// 560. 和为K的子数组
// https://leetcode-cn.com/problems/subarray-sum-equals-k/

const subarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, 1);
  let pre = 0, res = 0;
  for(let num of nums){
    pre += num;
    if(map.has(pre - k)){
      res += map.get(pre - k)
    }
    if(map.has(pre)){
      map.set(pre, map.get(pre) + 1)
    } else {
      map.set(pre, 1)
    }
  }
  return res;
}
