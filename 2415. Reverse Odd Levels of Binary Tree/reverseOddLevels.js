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
                nodesThisLevel.push(node.val);
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
    function constructTree(levels) {
        if (levels.length === 0 || levels[0].length === 0) {
            return null;
        }
    
        const root = new TreeNode(levels[0][0]);
        const queue = [{ node: root, pos: 0 }];  // Queue to keep track of nodes and their positions
    
        for (let i = 1; i < levels.length; i++) {
            const level = levels[i];
            const newQueue = [];  // New queue for the next level
    
            for (let j = 0; j < level.length; j++) {
                const parentIndex = Math.floor(j / 2);
                const parentNode = queue[parentIndex].node;
    
                if (level[j] !== null) {
                    const newNode = new TreeNode(level[j]);
    
                    if (j % 2 === 0) {
                        parentNode.left = newNode;
                    } else {
                        parentNode.right = newNode;
                    }
    
                    newQueue.push({ node: newNode, pos: j });
                }
            }
    
            queue.splice(0, queue.length, ...newQueue);  // Update the queue with nodes of the current level
        }
    
        return root;
    }
    return constructTree(nodesByLevel);

};

// Helper function - defintion of a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// // Testing
// console.log(reverseOddLevels([2,3,5,8,13,21,34]))