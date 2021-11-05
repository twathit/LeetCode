// 24. 两两交换链表中的节点
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

const swapPairs = (head) => {
  if(!head) return null;
  const helper = (node) => {
    const tempNext = node.next;
    if(tempNext) {
      const tempNextNext = tempNext.next;
      tempNext.next = node;
      if(tempNextNext){
        node.next = helper(tempNextNext)
      } else {
        node.next = null
      }
    }
    return tempNext || node;
  }
  return helper(head)
}
