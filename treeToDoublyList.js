// 剑指 Offer 36. 二叉搜索树与双向链表

const treeToDoublyList = (root) => {
  if(!root) return root;
  let pre = null;
  let head;
  const inOrder = (root) => {
    if(!root) return;
    inOrder(root.left);
    if(!head){
      head = root;
    }else{
      pre.right = root;
      root.left = pre;
    }
    pre = root;
    inOrder(root.right);
  }
  inOrder(root);
  head.left = pre;
  pre.right = head;
  return head;
}
