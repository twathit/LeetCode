// 45. 跳跃游戏 II
// https://leetcode-cn.com/problems/jump-game-ii/

const jump = (nums) => {
    let maxJump = 0;
    let end = 0;
    let step = 0;
    for(let i=0;i<nums.length-1;i++){
        if(i<=maxJump){
            maxJump = Math.max(maxJump, i+nums[i]);
        }
        if(i === end){
            end = maxJump;
            step ++;
        }
    }
    return step;
}