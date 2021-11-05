// 659. 分割数组为连续子序列
// https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/

const isPossible = (nums) => {
  const countMap = new Map();
  const endMap = new Map();
  for(let x of nums){
    countMap.set(x, (countMap.get(x) || 0) + 1);
  }

  for(let x of nums){
    const count = countMap.get(x);
    if(count > 0){
      const prevCount = endMap.get(x-1);
      if(prevCount>0){
        endMap.set(x, (endMap.get(x) || 0) + 1);
        endMap.set(x-1, prevCount-1);
        countMap.set(x, count - 1);
      }else{
        const count1 = countMap.get(x+1);
        const count2 = countMap.get(x+2);
        if(!!count1 && !!count2){
          endMap.set(x+2, (endMap.get(x+2) || 0) + 1);
          countMap.set(x, count - 1);
          countMap.set(x+1, count1 - 1);
          countMap.set(x+2, count2 - 1);
        }else{
          return false
        }
      }
    }
  }
  return true;
}
