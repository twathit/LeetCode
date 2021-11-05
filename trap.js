// 42. 接雨水
// https://leetcode-cn.com/problems/trapping-rain-water/

const trap = (height) => {
    const n = height.length;
    let ans = 0;
    if(n===0) return 0;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    rightMax[n-1] = height[n-1];
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }
    for(let i=n-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i])
    }
    for(let i=0;i<n;i++){
        ans += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return ans
}