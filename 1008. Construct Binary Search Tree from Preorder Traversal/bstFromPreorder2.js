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

// Strategy: 
// O(n^2) because worst case insertion takes O(n) iterated over n times // spaceO(n)
// Input: Array of numbers
// Output: BST
var bstFromPreorder = function(preorder) {
    if (preorder.length < 1) return null;

    const root = new TreeNode(preorder[0]);

    // Helper function to insert a value into the BST
    const insertIntoBST = (node, value) => {
        // Left subtree
        if (value < node.val) {
            if (node.left === null) { // Spot is available
                node.left = new TreeNode(value); 
            } else {
                insertIntoBST(node.left, value); // Spot is occupied
            }
        }

        // Right subtree
        else {
            if (node.right === null) { // Spot is available
                node.right = new TreeNode(value); 
            } else {
                insertIntoBST(node.right, value); // Spot is occupied
            }
        }
    }

    // Iterate over preorder array (starting at 1)
    for (let i = 1; i < preorder.length; i++) {
        insertIntoBST(root, preorder[i]);
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