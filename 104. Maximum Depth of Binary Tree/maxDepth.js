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
 * @return {number}
 */

// Input: BST node
// Output: Number
// Strategy - recursion
// O(n) - we visit each node once

var maxDepth = function(root) {
    // Base case - if current root is null // meaning we have reached beyond a leaf node
    if (root === null) {
        return 0;
    }

    // Recursive case - Call this function on each child node, compare their depths, and add 1 to account for this current node
    const leftDepth = maxDepth(root.left) + 1;
    const rightDepth = maxDepth(root.right) + 1;
    return Math.max(leftDepth, rightDepth);

    // This one-liner below does the same thing, but I prefer my code to be broken down for ease of debugging. I can access the intermediate values of leftDepth and rightDepth to zero in on the problem if a bug arises. One-liner is slick and intuitive though.
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};