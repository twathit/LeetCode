// 739. 每日温度
// https://leetcode-cn.com/problems/daily-temperatures/

const dailyTemperatures = (temperatures) => {
    const len = temperatures.length;
    const stack = [];
    const res = new Array(len).fill(0);
    for(let i=0;i<len;i++){
        const temperature = temperatures[i];
        while(!!stack.length && temperature>temperatures[stack[stack.length-1]]){
            const prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return res;
}