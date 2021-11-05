// 236. 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

const lowestCommonAncester = (root, p, q) => {
    let res;
    const dfs = (root, p, q) => {
        if(!root) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if((lson && rson) || ((lson || rson) && (root.val === p.val || root.val === q.val))){
            res = root;
        }
        return lson || rson || root.val === p.val || root.val === q.val;
    }
    dfs(root, p, q);
    return res;
}