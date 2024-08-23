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
// Strategy: Helper function to add grandchildren node values, traverse through BST looking for even-valued nodes using depth-first search
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var sumEvenGrandparent = function(root) {
    // Helper function to add grandchildren nodes
    const addGrandchildren = (node, array) => {
        if (node.left) {
            if (node.left.left) array.push(node.left.left.val);
            if (node.left.right) array.push(node.left.right.val);
        }
        if (node.right) {
            if (node.right.left) array.push(node.right.left.val);
            if (node.right.right) array.push(node.right.right.val);
        }
    }

    const targetedValues = []; // Keep track of values to be summed // Can modify to spaceO(1)

    // Recursive traversal of BST
    const process = (node, array) => {
        if (!node) return;

        if (node.val % 2 === 0) { // this is an even-valued grandparent
            addGrandchildren(node, array);
        }

        // Recursively call to traverse
        process(node.left, array);
        process(node.right, array);
    }

    process(root, targetedValues);

    // Sum targeted values
    return targetedValues.reduce((acc, curr) => acc + curr, 0);
};

// // testing
// console.log(sumEvenGrandparent([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]));