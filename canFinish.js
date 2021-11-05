// 207. 课程表
// https://leetcode-cn.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0);
  const map = {};
  const queue = [];
  let count = 0;
  for(let i=0;i<prerequisites.length;i++){
    inDegree[prerequisites[i][0]] ++;
    if(map[prerequisites[i][1]]){
      map[prerequisites[i][1]].push(prerequisites[i][0])
    }else{
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  for(let i=0;i<numCourses;i++){
    if(inDegree[i] === 0){
      queue.push(i);
    }
  }
  while(queue.length){
    const sel = queue.shift();
    count ++;
    const toEnQueue = map[sel];
    if(toEnQueue && toEnQueue.length){
      for(let i=0;i<toEnQueue.length;i++){
        inDegree[toEnQueue[i]] --;
        if(inDegree[toEnQueue[i]] === 0){
          queue.push(toEnQueue[i])
        }
      }
    }
  }
  return count === numCourses;
}
