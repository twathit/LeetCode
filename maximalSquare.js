// 221. 最大正方形
// https://leetcode-cn.com/problems/maximal-square/

const maximalSquare = (matrix) => {
    const row = matrix.length;
    if(row===0) return 0;
    const column = matrix[0].length;
    const dp = new Array(row).fill(0).map(() => new Array(column).fill(0));
    let max = 0;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(matrix[i][j]==='1'){
                if(i===0 || j===0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                }
                max = Math.max(dp[i][j], max);
            }
        }
    }
    return max * max
}