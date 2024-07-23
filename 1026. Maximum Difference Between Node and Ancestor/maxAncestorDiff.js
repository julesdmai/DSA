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

// Strategy: Depth-first search creating array of visited nodes, calculate greatest sequential difference and return
// O(n^2) // spaceO(n)
// Input: Root
// Output: Number
var maxAncestorDiff = function(root) {
    let maxDiff = 0;
    const dfs = (node, nodesVisited) => {
        if (!node) return;
        nodesVisited.push(node.val);
        
        // Leaf node
        if (!node.left && !node.right) {
            console.log(nodesVisited);
            let branchDiff = calculateGreatestSequentialDiff(nodesVisited);
            maxDiff = Math.max(maxDiff, branchDiff);
        }

        if (node.left) dfs(node.left, nodesVisited);
        if (node.right) dfs(node.right, nodesVisited);

        // Backtrack
        nodesVisited.pop();
        return;
    }
    dfs(root, []);
    return maxDiff;
};

// Helper function to calculate greatest sequential difference
const calculateGreatestSequentialDiff = (numbers) => {
    let greatestDiff = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let diff = Math.abs(numbers[j] - numbers[i]);
            greatestDiff = Math.max(greatestDiff, diff);
        }
    }
    return greatestDiff;
}