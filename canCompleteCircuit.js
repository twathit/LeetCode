// 134. 加油站
// https://leetcode-cn.com/problems/gas-station/

const canCompleteCircuit = (gas, cost) => {
  const n = gas.length;
  let i=0;
  while(i<n){
    let cnt = 0;
    let gasSum = 0;
    let costSum = 0;
    while(cnt<n){
      let j = (i + cnt)%n;
      gasSum += gas[j];
      costSum += cost[j];
      if(gasSum < costSum){
        break;
      }
      cnt ++;
    }
    console.log(cnt);
    if(cnt === n){
      return i;
    }else{
      i = i + cnt + 1;
    }
  }
  return -1;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
