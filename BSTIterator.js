// 173. 二叉搜索树迭代器
// https://leetcode-cn.com/problems/binary-search-tree-iterator/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.res = [];
  this.index = 0;
  this.inorderTraversal(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.res[this.index ++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.res.length;
};

BSTIterator.prototype.inorderTraversal = function(root) {
  if(!root) return;
  this.inorderTraversal(root.left);
  this.res.push(root.val);
  this.inorderTraversal(root.right);
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
