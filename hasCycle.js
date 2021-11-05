// 141. 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/

const hasCycle = (head) => {
  while(head){
    if(head.tag) return true;
    head.tag = true;
    head = head.next;
  }
  return false;
}
