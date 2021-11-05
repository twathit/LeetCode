// 两数相加-2

const addTwoNumbers = (l1, l2) => {
  let head = null, tail = null;
  let carry = 0;
  while(l1 || l2){
    const v1 = l1?l1.val:0;
    const v2 = l2?l2.val:0;
    const sum = v1+v2+carry;
    if(!head){
      head = tail = new ListNode(sum%10)
    }else{
      tail.next = new ListNode(sum%10)
      tail = tail.next
    }
    carry = Math.floor(temp/10)
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  if(carry>0) tail.next = new ListNode(carry)
  return head
}
