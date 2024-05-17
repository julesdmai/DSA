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

// Input: Root of BST
// Output: Number representing number of good paths

// Strategy: DFS
var goodNodes = function(root) {
    // Traverse the BST via DFS
    const dfs = (node, maxSoFar = 0) => {
        if (!node) return 0;

        // Check if current node is a good node
        let count = 0;
        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val;
        }
        
        // Recursive call to children
        count += dfs(node.left, maxSoFar);
        count += dfs(node.right, maxSoFar);

        return count;
    }
    return dfs(root, root.val);
};


/* ------------------------------- CODE REVIEW ------------------------------ */

/** 
Both solutions are correct and will work for counting good nodes in a binary tree. Solution 2 is more modular and functional, avoiding the use of global variables. Solution 1 is simpler and might be easier to understand at first glance but uses a global variable for counting.

If modularity and functional programming are priorities, Solution 2 is preferable. If simplicity and straightforward implementation are more important, Solution 1 might be the better choice.\
 */