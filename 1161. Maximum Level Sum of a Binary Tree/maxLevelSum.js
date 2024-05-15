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
 * @return {number}
 */
var maxLevelSum = function(root) {
    // Check edge case
    if (!root) return 0;
    
    const queue = [root];
    let maxSum = -Infinity
    let maxLevel = 1;
    let currentLevel = 1;

    while (queue.length > 0) {
        let numberOfNodesOnLevel = queue.length;
        let levelSum = 0; // Resets level to 0

        for (let i = 0; i < numberOfNodesOnLevel; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left); // After processing the node, we add its children to the queue
            if (node.right) queue.push(node.right);
        }

        // Finished processing all nodes on this level
        // Update maxSum and maxLevel if the current level's sum is greater than the leaderboard
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++; // Increment level
    }

    return maxLevel;
};

// Testing
