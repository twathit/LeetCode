// 4. 寻找两个正序数组的中位数
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let pre = cur = pin1 = pin2 = count = 0;
  while(count < Math.floor((len1 + len2)/2)){
    pre = cur;
    if((nums1[pin1]<nums2[pin2] && pin1 < len1) || pin2 >= len2){
      cur = nums1[pin1];
      pin1 ++;
    }else{
      cur = nums2[pin2];
      pin2 ++;
    }
    count ++;
  }
  return (len1 + len2) % 2 === 0 ? (cur + pre)/2 : cur;
}
