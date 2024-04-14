/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 *
 * This function checks if two binary trees are leaf-similar.
 * Two binary trees are considered leaf-similar if they have the same leaf node values in the same order.
 * The function extracts the leaf values from both trees and compares them.
 * Time Complexity: O(n) - n is the total number of nodes in both trees.
 */

var leafSimilar = function (root1, root2) {
  const getLeafValues = (root) => {
    const leafValues = [];
    const traverse = (node) => {
      if (!node) return; // Base case: if the node is null, do nothing
      if (!node.left && !node.right) {
        leafValues.push(node.val); // Found a leaf node, store its value
      } else {
        if (node.left) traverse(node.left); // Recursively traverse left subtree
        if (node.right) traverse(node.right); // Recursively traverse right subtree
      }
    };
    traverse(root); // Start the traversal from the root
    return leafValues;
  };

  // Extract leaf values from both trees
  const leafValues1 = getLeafValues(root1);
  const leafValues2 = getLeafValues(root2);

  // Compare the two arrays of leaf values
  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
