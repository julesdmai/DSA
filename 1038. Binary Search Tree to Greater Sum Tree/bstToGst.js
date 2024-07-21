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
 * @return {TreeNode}
 */
// Strategy: Traverse to collect values, traverse again to modify values
// O(n) // spaceO(n)
// Input: Root
// Output: Root
var bstToGst = function(root) {
    // First traversal: Collect values
    const values = [];
    const firstTraversal = root => {
        if (!root) return;
        values.push(root.val)
        firstTraversal(root.left);
        firstTraversal(root.right);
    }
    firstTraversal(root);

    // Sort values, we will be taking slices of this array
    const sorted = values.sort((a, b) => a - b);

    // Second traversal: Modify this value
    const secondTraversal = root => {
        if (!root) return;

        // Calculate sum of all nodes greater than value of this current node
        const indexOfVal = sorted.indexOf(root.val);
        const greaterSubarray = sorted.slice(indexOfVal + 1);
        const sumGreaterSubarray = greaterSubarray.reduce((acc, curr) => acc + curr, 0);
        
        // Add sum to this node's value
        root.val += sumGreaterSubarray;

        // Recursive call
        secondTraversal(root.left);
        secondTraversal(root.right);
    }
    secondTraversal(root);

    // Return root
    return root;
};