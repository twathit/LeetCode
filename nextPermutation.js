// 31. 下一个排列
// https://leetcode-cn.com/problems/next-permutation/

const nextPermutation = (nums) => {
    const len = nums.length;
    let i = len - 2;
    while(i >= 0 && nums[i] >= nums[i+1]){
        i --;
    }
    if(i>=0){
        let j = len - 1;
        while(j>=0 && nums[j] <= nums[i]){
            j --;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let l = i+1;
    let r = len - 1;
    while(l < r){
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l ++;
        r --;
    }
    return nums;
}