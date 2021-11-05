// 349. 两个数组的交集
// https://leetcode-cn.com/problems/intersection-of-two-arrays/

const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return intersectionOfSet(set1, set2)
}

const intersectionOfSet = (set1, set2) => {
  if(set1.size > set2.size){
    return intersectionOfSet(set2, set1);
  }
  const res = new Set();
  for(let num of set1){
    if(set2.has(num)){
      res.add(num)
    }
  }
  return [...res]
}
