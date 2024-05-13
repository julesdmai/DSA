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
    if (!root) return []; // Edge case
    
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelLength = queue.length; 
        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift(); // Get the first node in the queue

            // If it's the first element of the level (rightmost), add to result
            if (i === 0) result.push(node.val);

            // First enqueue the right child so it will be processed first for the next level
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
    }
    
    return result;
};

// // Testing for rightSideView()
// root = [1,2,3,null,5,null,4] // Output: [1,3,4]
// root = [1,null,3] // Output: [1,3]
// root = [] // Output: []



// var rightSideView = function(root) {
//     if (!root) return [];

//     let result = [];

//     const process = (node) => {
//         if (root) result.push(root.val);
//         if (root.right) process(root.right);
//     }
//     process(root);

//     return result;
// }