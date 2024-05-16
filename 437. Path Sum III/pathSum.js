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
 * @param {number} targetSum
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// Input: root of BST, number
// Output: Number
// Strategy: Use BST DFS to collect arrays of all possible depths
// Process each array to see how many end up equaling to the targetSum
var pathSum = function(root, targetSum) {
    const path = [];
    const paths = [];

    const dfs = (node, path, paths) => {
        if (!node) return;
    
        path.push(node.val);
    
        if (!node.left && !node.right) { // If it's a leaf node
            paths.push([...path]); // Store a copy of the current path
        } else {
            dfs(node.left, path, paths);
            dfs(node.right, path, paths);
        }
    
        path.pop(); // Backtrack
    };
    
    dfs(root, path, paths);
    console.log(paths); // Outputs all paths from root to leaf
    return paths;
}

// testing
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(pathSum(root), null);
