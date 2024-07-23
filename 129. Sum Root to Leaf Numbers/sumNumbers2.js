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

// Strategy: Calculate sum in single pass directly, depth-first search
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var sumNumbers = function(root) {
    // Helper function to perform DFS and calculate the sum
    const dfs = (node, currentSum) => {
        if (!node) return 0;

        // Account for the current node
        currentSum = currentSum * 10 + node.val;

        // If this is a leaf node, return the current sum
        if (!node.left && !node.right) return currentSum;

        // Recursive call for subtrees
        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    }
    return dfs(root, 0);
};

// // testing
// console.log(sumNumbers(root = [1,2,3]));