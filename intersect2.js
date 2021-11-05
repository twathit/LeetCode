// 350. 两个数组的交集 II
// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a-b);
  nums2.sort((a, b) => a-b);
  const len1 = nums1.length;
  const len2 = nums2.length;
  let i1=0,i2=0;
  const res = [];
  while(i1 < len1 && i2 < len2){
    if(nums1[i1] == nums2[i2]){
      res.push(nums1[i1])
      i1++
      i2++
    }else{
      nums1[i1] < nums2[i2] ? i1++ : i2++
    }
  }
  return res
}
