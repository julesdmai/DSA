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
 * @return {TreeNode}
 */

// Strategy: Two passes - First to create an array of nodes for each level, second pass to create a modified tree
// O(n) // spaceO(n)
// Input: Root
// Output: Root
var reverseOddLevels = function(root) {
    if (!root) return null;

    const nodesByLevel = [];

    // First pass to create an array of nodes for each level
    const queue = [root];
    const bfs = (queue) => {
        while (queue.length) {
            let levelSize = queue.length; // Fix the level size
            
            let nodesThisLevel = [];

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                nodesThisLevel.push(node);
            }

            // End floor
            nodesByLevel.push(nodesThisLevel);
        }
    }
    bfs(queue);

    // Modify odd levels
    for (let i = 1; i < nodesByLevel.length; i += 2) {
        nodesByLevel[i].reverse();
    }

    // Second pass to create tree from array of array of nodes
    const constructTree = (nodesByLevel) => {
        const root = nodesByLevel[0][0];
        const queue = [root];
        let level = 1;

        while (level < nodesByLevel.length) {
            let levelSize = nodesByLevel[level].length;

            for (let i = 0; i < levelSize; i++) {
                let parent = queue.shift();
                let leftChild = nodesByLevel[level][2 * i];
                let rightChild = nodesByLevel[level][2 * i + 1];

                parent.left = leftChild;
                parent.right = rightChild;

                queue.push(leftChild);
                queue.push(rightChild);
            }
            level++;
        }

        return root;
    }
    return constructTree(nodesByLevel);

};

// // Testing
// console.log(reverseOddLevels([2,3,5,8,13,21,34]))