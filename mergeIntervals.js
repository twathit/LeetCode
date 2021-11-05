// 头条-合并重叠区间
const mergeIntervals = (intervals) => {
  const result = [intervals[0]];
  intervals.sort((a, b) => a[0] - b[0]);
  for(let i=1;i<intervals.length;i++){
    const len = result.length;
    if(result[len-1][1] > intervals[i][0]){
      result[len-1][1] = intervals[i][1]
    } else {
      result.push(intervals[i])
    }
  }
  return result
}

console.log(mergeIntervals([[1,3],[2,6],[15,18],[8,10]]))
