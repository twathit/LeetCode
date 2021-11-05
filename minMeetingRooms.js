// 253. 会议室 II
// https://leetcode-cn.com/problems/meeting-rooms-ii/

const minMeetingRooms = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for(let i=1;i<intervals.length;i++){
    const len = res.length;
    for(let j=0;j<len;j++){
      if(res[j][1]<=intervals[i][0]){
        res[j][1] = intervals[i][1];
        break;
      }else if(j === len-1){
        res.push(intervals[i]);
        break;
      }
    }
  }
  return res.length;
}
