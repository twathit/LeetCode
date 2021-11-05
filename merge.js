// 56. 合并区间
// https://leetcode-cn.com/problems/merge-intervals/

const merge = (intervals) => {
    const res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for(let i=0;i<intervals.length;i++){
        if(!res.length || res[res.length - 1][1] < intervals[i][0]){
            res.push(intervals[i])
        }else{
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        }
    }
    return res;
}
