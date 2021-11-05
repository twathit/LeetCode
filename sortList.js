// 148. 排序链表
// https://leetcode-cn.com/problems/sort-list/

const merge = (head1, head2) => {
  let prev = preHead = new ListNode();
  while(head1 && head2){
    if(head1.val <= head2.val){
      prev.next = head1;
      head1 = head1.next;
    }else{
      prev.next = head2;
      head2 = head2.next;
    }
    prev = prev.next;
  }
  prev.next = head1 || head2;
  return preHead;
}

const sortList = (head, tail) => {
  if(!head) return head;
  if(head.next == tail){
    head.next = null;
    return head;
  }
  let fast = head;
  let slow = head;
  while(fast != tail){
    fast = fast.next;
    slow = slow.next;
    if(fast != tail){
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(sortList(head, mid), sortList(mid, tail));
}
