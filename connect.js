// 116. 填充每个节点的下一个右侧节点指针
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// 117. 填充每个节点的下一个右侧节点指针 II
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/

const connect = (root) => {
  if(!root) return root;
  const queue = [root];
  while(!!queue.length){
    const len = queue.length;
    for(let i=0;i<len;i++){
      const node = queue.shift();
      if(i !== len-1){
        node.next = queue[0];
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
}
