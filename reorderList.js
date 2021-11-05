// 143. 重排链表
// https://leetcode-cn.com/problems/reorder-list/

const reorderList = (head) => {
  const arr = [];
  let node = head;
  while(node){
    arr.push(node);
    node = node.next;
  }
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    arr[i].next = arr[j];
    i ++;
    if(i === j) break;
    arr[j].next = arr[i];
    j --;
  }
  arr[i].next = null;
  return arr[0];
}
