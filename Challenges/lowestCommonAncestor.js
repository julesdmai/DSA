/*

Lowest Common Ancestor of a Binary Tree
Description:

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example:

Input:

       3
     /   \
    5     1
   / \   / \
  6   2 0   8
     / \
    7   4

p = 5, q = 1

Output: 3

Explanation: The LCA of nodes 5 and 1 is 3.



Input:

       3
     /   \
    5     1
   / \   / \
  6   2 0   8
     / \
    7   4


p = 5, q = 4

Output: 5

Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Constraints:

The number of nodes in the tree is in the range [2, 10^5].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
p and q will exist in the tree.

*/

const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root; // If both left and right are non-null, root is the LCA
    return left ? left : right; // Otherwise, return the non-null child
}

// // Testing

// // Creating tree
// const root = new TreeNode(3);
// const node5 = new TreeNode(5);
// const node1 = new TreeNode(1);
// root.left = node5;
// root.right = node1;
// root.left.left = new TreeNode(6);
// root.left.right = new TreeNode(2);
// root.left.right.left = new TreeNode(7);
// root.left.right.right = new TreeNode(4);
// root.right.left = new TreeNode(0);
// root.right.right = new TreeNode(8);

// // Invoking function
// console.log(lowestCommonAncestor(root, node5, node1)); // Output: 3