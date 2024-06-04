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
 * @param {number} k
 * @return {number}
 */

// Strategy: // dfs, stopping at collection of 3 values

var kthSmallest = function(root, k) {
    
    let count = 0;
    let result = null;
    
    const dfs = (root) => {
        // If beyond leaf node or we have a result, then short-circuit
        if (!root || result !== null)  return;

        // Traverse down left branch
        dfs(root.left);
        count++;

        // If count has hit k value, then this node is the kth smallest value
        if (count === k) {
            result = node.val;
            return;
        }
        dfs(root.right);
    }

    dfs(root);
    return result;
};