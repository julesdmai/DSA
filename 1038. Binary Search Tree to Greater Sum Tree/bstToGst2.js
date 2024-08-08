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
// Strategy: Perform reverse in-order traversal (right -> node -> left) and keep a running total allowing us to only visit each node once
// O(n) // spaceO(1)
// Input: Root
// Output: Root
var bstToGst = function(root) {
    let total = 0;

    const process = root => {
        if (!root) return;

        // Process rightmost node
        process(root.right);

        // Process current node
        total += root.val;
        root.val = total;

        // Process left nodes
        process(root.left);
    }
    process(root);

    return root;
};