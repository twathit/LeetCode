// 160. 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

const getIntersectionNode = (headA, haedB) => {
  if(headA == null || headB == null){
    return null;
  }
  let pA = headA;
  let pB = headB;
  while(pA !== pB){
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA
}

const getIntersectionNode = (headA, haedB) => {
  const visited = new Set();
  let temp = headA;
  while(temp){
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while(temp){
    if(visited.has(temp)) return temp;
    temp = temp.next;
  }
  return null;
}
