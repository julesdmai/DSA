/*

Maximum Depth of Binary Tree
Description:

Given the root of a binary tree, return its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:

Input:

     3
   /   \
  9    20
      /  \
     15   7


Output: 3

Constraints:

The number of nodes in the tree is in the range [0, 10^4].
-100 <= Node.val <= 100


*/

// O(n) // spaceO(1 or h where h is height of the tree due to recursion stacks)


const maxDepthOfBinaryTree = (root) => {

    // Helper function to perform DFS and get the maximum depth
    const dfs = (node) => {
        // Base case
        if (!node) return 0;

        // Recursively find max depth of left and right subtrees + add 1 for current node
        return Math.max(dfs(node.left), dfs(node.right)) + 1
    }

    return dfs(root);
}