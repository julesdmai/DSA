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
 * @param {number} targetSum
 * @return {number}
 */

// Input: root of BST, number
// Output: Number
// Strategy: Use BST DFS to collect arrays of all possible depths
// Process each array to see how many end up equaling to the targetSum
var pathSum = function(root, targetSum) {
    if (!root) return 0;

    const prefixSum = {0: 1 }; // sum of 0 has occured once
    return dfs (root, 0, targetSum, prefixSum);
};

const dfs = (node, currentSum, targetSum, prefixSum) => {
    if (!node) return 0;

    currentSum += node.val;

    // Check if there is a prefix sum that we can subtrct to get targetSum
    let count = prefixSum[currentSum - targetSum] || 0;

    // Update the prefix sum map with the current sum
    prefixSum[currentSum] = (prefixSum[currentSum] || 0) + 1;

    // Recursively calculate the number of valid paths in left and right subtrees
    count += dfs(node.left, currentSum, targetSum, prefixSum);
    count += dfs(node.right, currentSum, targetSum, prefixSum);

    // Backtrack: remove the c urrent sum from the prefix sum map
    console.log(prefixSum);
    prefixSum[currentSum]--; 

    return count;
};

// // testing
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// console.log(pathSum(root), null);
