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
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

var deleteNode = function(root, key) {
    if (!root) return null; // If the tree is empty or the node could not be found

    // Key is less than root, traverse left
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // We have found the node we must delete

        // Node with only one child or no children, simply pass the remaining node up the tree
        if (!root.right) return root.left;
        if (!root.left) return root.right;

        // Node with two children
        // Find the in-order successor (smallest in the right subtree)
        // This node is chosen because it is the next node that would appear in an in-order traversal of the BST, making it the smallest node that is still larger than all nodes in the left subtree. It's a suitable candidate to replace the deleted node because it maintains the BST properties. 
        let successor = findMin(root.right);

        // Replace root's value with the successor's value
        // This effectively deletes the node by overwriting its value but keeps its physical presence as a link in the tree.
        root.val = successor.val;

        // Delete the successor node from the right subtree
        // We must remove the successor node from its original position in the tree. This is generally simpler because the successor, by the nature of being the leftmost node in a subtree, will have at most one child.
        root.right = deleteNode(root.right, successor.val);

    }

    return root;
};

// // Testing for deleteNode()
// const root1 = [5,3,6,2,4,null,7], key1 = 3;
// console.log(deleteNode(root1, key1)); // Output: [5,4,6,2,null,null,7]

// // const root2 = [5,3,6,2,4,null,7], key2 = 0
// // console.log(deleteNode(root2, key2)); // Output: [5,3,6,2,4,null,7] // This BST does not contain the key

// // const root3 = [], key3 = 0
// // console.log(deleteNode(root3, key3)); // Output: []