// 124. 二叉树中的最大路径和
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

const maxPathSum = (root) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const maxGain = (root) => {
        if(!root) return 0;
        const leftMax = Math.max(maxGain(root.left), 0);
        const rightMax = Math.max(maxGain(root.right), 0);
        const sum = root.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, sum);
        return root.val + Math.max(leftMax, rightMax);
    }
    maxGain(root);
    return maxSum;
}