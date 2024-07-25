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
 * @return {number[][]}
 */

// Strategy: Use a queue to manage the nodes visited, process nodes and their children based on this queue
// O(n) // spaceO(n)
// Input: Root
// Output: Array of arrays
var levelOrder = function(root) {
    if (!root) return [];

    // Use a queue to manage nodes visited
    const result = [];
    const queue = [root];

    while (queue.length) {
        let level = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.val);
        }
        // End floor
        result.push(level);
    }
    return result;
};

// // testing
// console.log(levelOrder([3,9,20,null,null,15,7]));