/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// Strategy: Shift numbers off the preorder list, construct new node, traverse the tree and place the new node
// O(n^2) because of shift // spaceO(n)
// Input: Array of numbers
// Output: BST
var bstFromPreorder = function(preorder) {
    const root = new TreeNode(preorder.shift());

    // Helper function to take in an array of numbers and create new nodes and place them
    const process = (preorder, node) => {
        
        // Traverse the tree searching for suitable location for new node
        // Address left subtree
        if (preorder[0] < node.val && node.left === null) {
            // Create new node and place
            const newNode = new TreeNode(preorder.shift());
            node.left = newNode;
            return;
        } else if (preorder[0] < node.val && node.left !== null) {
            // Must go deeper, recursive call
            process(preorder, node.left);
        }

        // Address right subtree
        else if (preorder[0] > node.val && node.right === null) {
            const newNode = new TreeNode(preorder.shift());
            node.right = newNode;
            return;
        } else if (preorder[0] > node.val && node.right !== null) {
            process(preorder, node.right);
        }
    }
    while (preorder.length > 0) {
        process(preorder, root);
    }

    return root;  
};

// Helper function - defintition for a binary ree node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// // testing
// console.log(bstFromPreorder([8,5,1,7,10,12]));
// console.log(bstFromPreorder([1,3]));