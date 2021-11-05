// 19. 删除链表的倒数第 N 个结点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

const removeNthFromEnd = (head, n) => {
  let fast = slow = ret = new ListNode(0, head);
  while(n--){
    fast = fast.next;
  }
  while(fast.next){
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return ret.next;
}
