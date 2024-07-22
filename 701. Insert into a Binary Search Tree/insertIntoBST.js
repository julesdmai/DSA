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
 * @param {number} val
 * @return {TreeNode}
 */

// Strategy: Helper function to walk the tree and insert the node, invoke it, return root
// O(logn) // spaceO(1)
// Input: Root, number
// Output: Root
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);

    // Helper function to walk the tree and insert new node accordingly
    const process = (node, val) => {
        // Left subtree
        if (val < node.val) {
            // Spot is available
            if (!node.left) node.left = new TreeNode(val); 
            // Spot is occupied
            else process(node.left, val);
        }

        // Right subtree
        else {
            if (!node.right) node.right = new TreeNode(val);
            else process(node.right, val);
        }
    }
    process(root, val);

    // Invoke and return root
    return root;
};

// Helper function defintiion of a node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}