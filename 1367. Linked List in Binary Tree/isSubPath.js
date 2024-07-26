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

// Strategy: Check for LL head and BST node match, search children nodes for more of the LL, if LL is completely found, then return true, otherwise end of loop return false
// O(n) // spaceO(n)
// Input: LL, BST
// Output: Boolean
var isSubPath = function(head, root) {
    // Traverse both LL and BST
    const traverseBoth = (head, node) => {
        if (!head) return true;

        // LL and BST do match
        if (head.val === node.val) {
            if (node.left) return traverseBoth(head.next, node.left);
            if (node.right) return traverseBoth(head.next, node.right);
        }

        // LL and BST do not match
        else if (head.val !== node.val) {
            if (node.left) return traverseBoth(head, node.left);
            if (node.right) return traverseBoth(head, node.right);
        }
    }
    return traverseBoth(head, root);
};

// // Testing
// console.log(isSubPath([4, 2, 8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]))