/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Strategy: Recursion, base case - array is empty t/f return null, recursive case - create root node, recursively call on left and right subarrays, attach to root node, return root node
var constructMaximumBinaryTree = function(nums) {
    // Base case
    if (!nums.length) return null;

    // Recursive case
    const maxValue = Math.max(...nums);
    const maxIndex = nums.indexOf(maxValue);
    const leftSubarray = nums.slice(0, maxIndex);
    const rightSubarray = nums.slice(maxIndex + 1);

    const rootNode = new TreeNode(maxValue);
    rootNode.left = constructMaximumBinaryTree(leftSubarray);
    rootNode.right = constructMaximumBinaryTree(rightSubarray);

    return rootNode;
};

// Helper function - defintition for a binary treee node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// // Testing
// console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))