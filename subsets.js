// 78. 子集
// https://leetcode-cn.com/problems/subsets/

const subsets = (nums) => {
    const res = [];
    const t = [];
    const dfs = (cur) => {
        if(cur === nums.length){
            console.log(t)
            res.push(t.slice());
            return
        }
        t.push(nums[cur]);
        console.log('=================push', t, cur+1)
        dfs(cur+1);
        t.pop();
        console.log('=================pop', t, cur+1)
        dfs(cur+1)
    }
    dfs(0);
    return res
}

console.log(subsets([1,2,3]))
