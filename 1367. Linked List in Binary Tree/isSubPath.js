/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

// Strategy: Use DFS
// O(n) // spaceO(1)
// Input: LL, BST
// Output: Boolean
var isSubPath = function(head, root) {
    if (!root) return false;

    // Check if linked list head matches subtree root node
    const checkPath = (head, node) => {
        if (!head) return true; // All nodes in LL are matched
        if (!node) return false; // Reached end of branch without matching

        if (head.val === node.val) {
            if (checkPath(head.next, node.left)) return true;
            if (checkPath(head.next, node.right)) return true;
        }
        return false;
    }
    
    // Traverse the tree and check for subpath starting at each node
    if (checkPath(head, root)) return true; // This current node is the start
    if (isSubPath(head, root.left)) return true; // Check left child
    if (isSubPath(head, root.right)) return true; // Check right child

    return false;
};

// // Testing
// console.log(isSubPath([4, 2, 8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]))