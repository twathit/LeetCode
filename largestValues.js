// 在每个树行中找最大值-515
// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/

const largestValues = (root) => {
  if(!root) return []
  const queue = [root];
  const maxList = [];
  while (queue.length) {
    let len = queue.length;
    let max = queue[0].val;
    for(let i=0; i<len; i++) {
      const cur = queue.shift();
      max = Math.max(max, cur.val);
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
    }
    maxList.push(max)
  }
  return maxList
}

const largestValues = (root) => {

  const colletLargest = (root, maxList, level) => {
    if(!root) return;
    if(maxList[level] === undefined){
      maxList[level] = root.val
    } else {
      maxList[level] = Math.max(root.val, maxList[level])
    }
    root.left && colletLargest(root.left, maxList, level + 1);
    root.right && colletLargest(root.right, maxList, level + 1);
  }

  let maxList = [];
  colletLargest(root, maxList, 0);
  return maxList;
}
