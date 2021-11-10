// 83. 删除排序链表中的重复元素
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

const deleteDuplicates = (head) => {
  if(!head){
    return head;
  }
  let cur = head;
  while(cur.next){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next;
    }else{
      cur = cur.next;
    }
  }
  return head;
}
