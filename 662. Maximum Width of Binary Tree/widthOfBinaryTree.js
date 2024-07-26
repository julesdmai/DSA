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

// Strategy: Use level-order traversal and store pairs [node, position] in a queue to process nodes, normalize positions to help prevent overflow, calculate level width 
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    const queue = [[root, 0]] // Store [node, position] in queue
    let maxWidth = 0;

    while (queue.length) {
        const levelSize = queue.length;
        let minPosition = queue[0][1] // Used for position normalization
        let first = null; // Used to calculate level width
        let last = null;

        for (let i = 0; i < levelSize; i++) {
            const [node, position] = queue.shift();

            // Normalize position of node within current level of binary tree
            let normPosition = position - minPosition; // Helps prevent int overflow for large indices for sparse trees

            if (i === 0) first = normPosition;
            if (i === levelSize - 1) last = normPosition;

            if (node.left) queue.push([node.left, normPosition * 2])
            if (node.right) queue.push([node.right, normPosition * 2 + 1])
        }

        // End level, update max width
        const levelWidth = last - first + 1;
        maxWidth = Math.max(levelWidth, maxWidth);
    }

    return maxWidth;
};


// // testing
// console.log(widthOfBinaryTree([1,3,2,5,3,null,9])) // 4
// console.log(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7])) // 7
// console.log(widthOfBinaryTree([1,3,2,5])) // 2