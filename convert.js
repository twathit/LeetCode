// 6. Z 字形变换
// https://leetcode-cn.com/problems/zigzag-conversion/

const convert = (s, numRows) => {
    if(numRows === 1 || s.length<=numRows) return s;
    const res = [];
    for(let i=0;i<numRows;i++){
        res[i] = '';
    } 
    let down = false;
    let loc = 0;
    for(let c of s){
        res[loc] += c;
        if(loc === 0 || loc === numRows - 1){
            down = !down;
        }
        loc = down ? loc + 1 : loc - 1;
    }
    let ans = '';
    for(let i=0;i<res.length;i++){
        ans += res[i];
    }
    return ans;
}