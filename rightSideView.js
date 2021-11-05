// 199. 二叉树的右视图
// https://leetcode-cn.com/problems/binary-tree-right-side-view/

const rightSideView = (root) => {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length){
        const len = queue.length;
        for(let i=0;i<len;i++){
            let node = queue.shift();
            if(i===0) res.push(node.val);
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
    }
    return res;
}