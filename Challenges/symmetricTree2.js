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

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

const isSymmetric = (root) => {
    if (!root) return true;

    // Helper recursive function to check two sub-trees for mirroring
    const isMirror = (tree1, tree2) => {
        if (!tree1 && !tree2) return true; // If both are null, symmetric
        if (!tree1 || !tree2) return false; // If one is null, not symmetric

        return (
            tree1.val === tree2.val && // Compare values
            isMirror(tree1.right, tree2.left) && // Compare children
            isMirror(tree1.left, tree2.right) // Compare children
        );
    }

    return isMirror(root.left, root.right);
}
