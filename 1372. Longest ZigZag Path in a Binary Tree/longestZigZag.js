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

 // Create a function to ZigZag and return a count
// Input: Node, Direction
// Output: Number representing pathLength
const zigZag = (node, direction, length) => {
    if (!node) return (length - 1); // We subtract 1 because the length includes the starting node 

    if (direction === 'right') {
        return Math.max(
            zigZag(node.right, 'left', length + 1),
            zigZag(node.left, 'right', 1)
        );
    } else if (direction === 'left') {
        return Math.max(
            zigZag(node.left, 'right', length + 1),
            zigZag(node.right, 'left', 1)
        )
    }
}

 var longestZigZag = function(root) {
    if (!root) return 0;

    return Math.max(
        zigZag(root, 'right', 0), // Start zigZag on right
        zigZag(root, 'left', 0) // Start zigZag on left
    );
};