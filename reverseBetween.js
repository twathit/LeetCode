// 92. 反转链表 II
// https://leetcode-cn.com/problems/reverse-linked-list-ii/

const reverseBetween = (head, left, right) => {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;
  for(let i=0;i<left-1;i++){
    prev = prev.next;
  }
  let cur = prev.next;
  for(let i=0;i<right-left;i++){
    const next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummyNode.next;
}
