// 103. 二叉树的锯齿形层序遍历
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

const zigzagLevelOrder = (root) => {
  const res = [];
  if(!root) return res;
  const queue = [root];
  let isLevelOrder = true;
  while(queue.length){
    const temp = [];
    const len = queue.length;
    for(let i=0;i<len;i++){
      const node = queue.shift();
      if(isLevelOrder){
        temp.push(node.val);
      }else{
        temp.unshift(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(temp);
    isLevelOrder = !isLevelOrder;
  }
  return res;
}
