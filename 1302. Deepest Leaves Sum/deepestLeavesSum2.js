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

// Strategy: Level-order traversal while keeping track of the sum of current level
// O(n) // spaceO(n)
// Input: Root
// Output: Number
var deepestLeavesSum = function(root) {
    if (!root) return 0;

    const queue = [root];
    let currentSum = 0;
    
    while (queue.length) {
        let levelSize = queue.length; // Reset for each new level 
        currentSum = 0; // Reset for each new level

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return currentSum;
};

// // testing
// console.log(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8]));