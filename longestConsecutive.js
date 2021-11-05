// 128. 最长连续序列
// https://leetcode-cn.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let longestStreak = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let currentStreak = 1;
            while(set.has(currentNum + 1)){
                currentNum ++;
                currentStreak ++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}