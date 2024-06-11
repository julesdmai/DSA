/*
Path Sum
Description:

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example:

Input:
     5
   /   \
  4     8
 /     / \
11    13  4
/  \       \
7    2       1

targetSum: 22

Output: true

Explanation: The path is 5 -> 4 -> 11 -> 2.

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/


const pathSum = (root, targetSum) => {
    const dfs = (node, currentSum) => {
        // Reached end without finding targetSum
        if (!node) return false;
        
        // Update the current path sum
        currentSum += node.val;

        // Check if we're at a leaf node and the path sum equals target sum
        if (!node.left && !node.right) {
            return currentSum === targetSum;
        }

        // Recursively check the left and right subtrees
        return dfs(node.left, currentSum) || dfs(node.right, currentSum);

    }
    return dfs(root, 0);
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.right = new TreeNode(1);

// Checking if the binary tree has a path sum equal to 22
console.log(pathSum(root, 22)); // Output: true