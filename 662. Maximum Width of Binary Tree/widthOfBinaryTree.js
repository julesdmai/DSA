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

// Strategy: Use BFS - level-order traversal to find, calculate level width and compare to maxWidth
// O(n^2) // spaceO(n)
// Input: Root
// Output: Number
var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    // BFS - level-order traversal
    const queue = [root];
    let maxWidth = 0;

    while (queue.length) {
        // Calculate width of current level by trimming null values
        let levelWidth = calculateWidth(queue);
        maxWidth = Math.max(levelWidth, maxWidth);

        // Add children to queue
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            } else {
                queue.push(null);
                queue.push(null);
            }
        }
    }
    
    // End loop
    return maxWidth;
};

// Helper function to calculate level width by trimming pre-post trailing null values
const calculateWidth = (array) => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end && array[start] === null) {
        start++;
    }
    while (end >= start && array[end] === null) {
        end--;
    }
    return end - start + 1;
}

// // testing
// console.log(widthOfBinaryTree([1,3,2,5,3,null,9])) // 4
// console.log(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7])) // 7
// console.log(widthOfBinaryTree([1,3,2,5])) // 2