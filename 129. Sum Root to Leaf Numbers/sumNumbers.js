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

// Strategy: Accumulate rootToLeafNumbers, keep array of nodes visited, at leaf node push to final array then pop to backtrack, sum numbers and return, be mindful about data types
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var sumNumbers = function(root) {
    const rootToLeafNumbers = [];

    const process = (root, nodesVisited) => {
        if (!root) return;

        // Process this node
        let thisNode = String(root.val);
        nodesVisited.push(thisNode);
        if (!root.left && !root.right) {
            rootToLeafNumbers.push(Number(nodesVisited.join('')));
        }

        // Recursively call left and right
        if (root.left) process(root.left, nodesVisited);
        if (root.right) process(root.right, nodesVisited);

        // Always pop to backtrack
        nodesVisited.pop();
        return;
    }
    process(root, []);

    // console.log(rootToLeafNumbers);
    return rootToLeafNumbers.reduce((acc, curr) => acc + curr, 0);
};

// // testing
// console.log(sumNumbers(root = [1,2,3]));