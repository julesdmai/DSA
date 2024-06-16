/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */

// Strategy - Iterate through, hashmap to store nodes, set to store children nodes, root node is the only node not in children nodes set
// O(n) // spaceO(n)
// Input: Array of arrays of numbers
// Output: Root
var createBinaryTree = function(descriptions) {
    const nodes = new Map();
    const children = new Set();

    // Iterate through descriptions
    for (const [parentVal, childVal, isLeft] of descriptions) {
        // Create the nodes that do not exist
        if (!nodes.has(parentVal)) {
            nodes.set(parentVal, new TreeNode(parentVal));
        }
        if (!nodes.has(childVal)) {
            nodes.set(childVal, new TreeNode(childVal));
        }

        // Connect the nodes
        const parentNode = nodes.get(parentVal);
        const childNode = nodes.get(childVal);
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        children.add(childVal);
    };

    // The root node is the only value not found in the childrens set
    let root;
    for (const [parentVal] of descriptions) {
        if (!children.has(parentVal)) {
            root = nodes.get(parentVal); // Use the hashmap
            break;
        }
    }
    return root;
};

// // testing
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// console.log(createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]));