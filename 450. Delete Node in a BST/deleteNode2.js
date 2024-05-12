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
 * @param {number} key
 * @return {TreeNode}
 */
const findMin = (root) => {
    while (root.left) {
        root = root.left;
    }
    return root; // Returns a node
}
var deleteNode = function(root, key) {
    if (!root) return root;

    // If lower, traverse left
    // If greater, traverse right
    // If found, then we must do some things
    if (root.val > key) {
        root.left = deleteNode(root.left, key); // Finds the target, and then deletes by reassigning
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        // If target node has one or no children
        if (!root.left) return root.right; // We need to return a node to replace 
        if (!root.right) return root.left;

        // If there are two children
        const successor = findMin(root.right); // Find the successor node
        root.val = successor.val; // Overwrite this current node with sucessor node
        root.right = deleteNode(root.right, successor.val); // Delete the original location of the successor node
    }

    return root;
};