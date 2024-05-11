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
var goodNodes = function(root) {
    let goodNodesCount = 0;

    const process = (node, maxVal) => {
        if (!node) return; // Base case

        // Check if the current node is a good node
        if (node.val >= maxVal) {
            goodNodesCount++
            maxVal = node.val; // Update the maxVal since future node must be greater than or equal to this new value
        }
        
        process(node.left, maxVal);
        process(node.right, maxVal);
    }
    process(root, -Infinity); // Floor the maxVal initially
    return goodNodesCount;
};

// Testing for goodNodes()
// root1 = [3,1,4,3,null,1,5]; // Output: 4
// root2 = [3,3,null,4,2]; // Output: 3
// root3 = [1]; // Output: 1