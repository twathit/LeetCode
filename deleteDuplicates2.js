// 82. 删除排序链表中的重复元素 II
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

const deleteDuplicates = (head) => {
  if(!head) return head;
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while(cur.next && cur.next.next){
    if(cur.next.val === cur.next.next.val){
      const x = cur.next.val;
      while(cur.next && cur.next.val === x){
        cur.next = cur.next.next;
      }
    }else{
      cur = cur.next;
    }
  }
  return dummy.next;
}
