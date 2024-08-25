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
// Strategy: Traverse through BST searching for even-valued nodes using depth-first search
// O(n) // spaceO(1)
// Input: Root
// Output: Number
var sumEvenGrandparent = function(root) {
    let sum = 0;

    // Recursive traversal of BST
    const process = (node, parent, grandparent) => {
        if (!node) return;

        if (grandparent && grandparent.val % 2 === 0) {
            sum += node.val;
        }

        // Recursively call to traverse
        process(node.left, node, parent); // node -> parent -> grandparent ---> node.left -> node -> parent
        process(node.right, node, parent);
    }
    process(root, null, null);

    return sum;
};

// // testing
// console.log(sumEvenGrandparent([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]));