// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/

const mergeTwoLists = (l1, l2) => {
  const prev = prehead = new ListNode();
  while (l1 && l2){
    if(l1.val <= l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 || l2;
  return prehead.next;
}
