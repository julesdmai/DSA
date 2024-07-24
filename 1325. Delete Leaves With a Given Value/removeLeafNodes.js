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
 * @param {number} target
 * @return {TreeNode}
 */

// Strategy: Post-order traversal (left -> right -> node), delete node if leaf and matches target, process tree then return root
// O(n) // spaceO(n)
// Input: Root
// Output: Root
var removeLeafNodes = function(root, target) {
    // Post-order traversal (left -> right -> node)
    const dfsDeleteTarget = (node, target) => {
        if (!node) return null;

        // Address children
        node.left = dfsDeleteTarget(node.left, target);
        node.right = dfsDeleteTarget(node.right, target);

        // Address self
        if (!node.left && !node.right && node.val === target) {
            return null;
        } else {
            return node;
        }
    }
    return dfsDeleteTarget(root, target);
};

// // testing
// console.log(removeLeafNodes([1,2,3,2,null,2,4], 2));