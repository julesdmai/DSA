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
    
    const smallest = [];
    
    const dfs = (root) => {
        if (!root) return;
        if (smallest.length > (k + 1)) return; // short-circuit once we've collected enough small values
        dfs(root.left);
        smallest.push(root.val);
        dfs(root.right);
        return;
    }
    dfs(root);

    const kthSmallestValue = smallest[k - 1];
    return kthSmallestValue;
};