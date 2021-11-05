// 55. 跳跃游戏
// https://leetcode-cn.com/problems/jump-game/

const canJump = (nums) => {
    let maxJump = 0;
    for(let i=0;i<nums.length;i++){
        if(i<=maxJump){
            maxJump = Math.max(maxJump, i+nums[i])
        }
        if(maxJump>=nums.length-1){
            return true;
        }
    }
    return false;
}