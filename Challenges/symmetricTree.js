/*

Problem: Symmetric Tree
Description:

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example:

Input:
     1
   /   \
  2     2
 / \   / \
3   4 4   3

Output: true

Input:
     1
   /   \
  2     2
   \     \
   3      3

Output: false

Constraints:

The number of nodes in the tree is in the range [0, 1000].
-100 <= Node.val <= 100
*/

// Strategy: BFS, collect null values as well
// O(n) // spaceO(n)
// Input: Tree
// Output: Boolean

const symmetricTree = (root) => {
    if (!root) return false;

    const queue = [root];

    while (queue.length > 0) {
        // Level size // how many times to iterate
        let levelSize = queue.length;
        const level = [];

        // Iterate through the nodes of this level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            
            if (node === null) {
                level.push(null);
            } else {
                level.push(node.val);
                queue.push(node.left || null);
                queue.push(node.right || null);
            }

        }
        // Compare for palindrome
        while (level.length > 1) {
            let first = level.shift();
            let last = level.pop();
            if (first !== last) return false;
        }

    }
    // At end of loop, all nodes have been verified, return true
    return true;
}