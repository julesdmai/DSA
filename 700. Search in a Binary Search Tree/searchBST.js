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
 * @param {number} val
 * @return {TreeNode}
 */
// val = 4, return this root node
// val = 2, we need to traverse down left because smaller
// if new node is null, then we have been unsuccessful, default return false

// O(logn)
var searchBST = function(root, val) {
    // base case: we have found it or we have found null
    if (!root) return null
    if (root.val === val) return root;

    // Recursive case
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    else if (val > root.val) {
        return searchBST(root.right, val);
    }
};