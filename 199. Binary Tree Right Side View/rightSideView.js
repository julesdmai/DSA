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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let levelLength = queue.length // Number of nodes at current level
        let lastVisibleNode; // Keep track of last node at each level

        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift();

            // Update last visible node of this level
            lastVisibleNode = node.val;

            // Enqueue children
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // The last visible node of each level is added to result
        result.push(lastVisibleNode);
    }

    return result;
};

// // Testing for rightSideView()
// root = [1,2,3,null,5,null,4] // Output: [1,3,4]
// root = [1,null,3] // Output: [1,3]
// root = [] // Output: []