/*

Problem: Binary Tree Level Order Traversal
Description:

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example:

Input:
     3
   /   \
  9    20
      /  \
     15   7

Output: [[3], [9, 20], [15, 7]]

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

*/

// Strategy: BFS using queue
// O(n) // spaceO(n)
const levelOrder = (root) => {
    if (!root) return [];
    
    const results = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        results.push(currentLevel);
    }
    return results;
}