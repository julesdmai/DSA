/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */

// Strategy: Traverse tree, look for leaf nodes, delete nodes
// Input: Tree
// Output: Tree
// O(n) // spaceO(n)
var pruneTree = function(root) {
    const process = (node) => {
        if (node.left) {
            node.left = pruneTree(node.left);
        }
        if (node.right) {
            node.right = pruneTree(node.right);
        }

        // Check for leaf node with value 0 - delete
        if (!node.left && !node.right && node.val === 0) {
            return null;
        }

        return node;
    }

    return process(root);
};

// // testing
// console.log(pruneTree([1,null,0,0,1]))