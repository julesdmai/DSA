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

// Strategy: Level-order traversal while keeping history of prevLevel
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var deepestLeavesSum = function(root) {
    const queue = [root];
    const prevLevel = [];
    while (queue.length) {
        // Process nodes from the queue, adding children nodes to the queue
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            prevLevel.push(node);
        }
        // If queue has no length, then prevLevel is the deepest nodes 
        if (queue.length === 0) {
            break;
        } else { // Deeper nodes exist, so we reset current history
            while (prevLevel.length) prevLevel.pop();
        }
    }

    // Calculate sum of nodes
    return prevLevel.reduce((acc, curr) => acc + curr.val, 0);
};