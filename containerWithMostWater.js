// 11. 盛最多水的容器
// https://leetcode-cn.com/problems/container-with-most-water/

const containerWithMostWater = (heights) => {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;
  while(left < right) {
    max = Math.max(max, Math.min(heights[left], heights[right]) * (right-left));
    if(heights[left] < heights[right]) {
      left ++
    } else {
      right --
    }
  }
  return max
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
