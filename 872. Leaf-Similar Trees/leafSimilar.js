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
 */

// Compare two BSTs, given their respective root nodes
// Form an array of all of root1's leaf node values
// Do the same for root2
// Return if root1 and root2 are the same
// O(n) - have to visit each leaf node once to create the array - Comparison of stringify array is O(m)

var leafSimilar = function (root1, root2) {
  const leafValues1 = [];
  const leafValues2 = [];

  const process = (root, leafValues) => {
    if (!root) return; // if node is null, return
    if (root.left === null && root.right === null) {
      leafValues.push(root.val); // we are at a leaf node
    } else {
      if (root.left) process(root.left, leafValues); // traverse
      if (root.right) process(root.right, leafValues); // traverse
    }
  };

  process(root1, leafValues1);
  process(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};
