// 206. 反转链表

const reverseList = (head) => {
  let prev = null, curr = head;
  while(curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next
  }
  return prev;
}
