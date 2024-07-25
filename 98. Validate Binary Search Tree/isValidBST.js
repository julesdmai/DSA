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
 * @return {boolean}
 */

// Strategy: Depth-first search checking for constraints
// O(n) // spaceO(n)
var isValidBST = function(root) {
    const validate = (node, min, max) => {
        if (!node) return true; // An empty tree is a valid BST
        
        // Check the current node's value against the min and max constraints
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // Recursively validate the left and right subtrees with updated constraints
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };

    return validate(root, null, null);
};

// // testing
// console.log(isValidBST([1,2,3]))
// console.log(isValidBST([5,1,4,null,null,3,6]))