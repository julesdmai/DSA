/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// Strategy: Iterate through LL using slow and fast pointers, collect nodes into two stacks, first stack until halfway point, second stack after halfway point, using a dummy node create a new re-ordered LL
// O(n) // spaceO(1)
// Input: LL
// Output: LL
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return;

    // Collect nodes into 2 stacks
    const beforeHalfway = [];
    const afterHalfway = [];

    // Iterate through LL using slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        beforeHalfway.push(slow);
        slow = slow.next;
        fast = fast.next.next;
    }

    // Itereate the second half using slow pointer and collect nodes
    while (slow) {
        afterHalfway.push(slow);
        slow = slow.next;
    }

    // Re-assign next arrows
    let i = 0;
    while (i < beforeHalfway.length && afterHalfway.length) {
        let beforeNode = beforeHalfway[i];
        let afterNode = afterHalfway.pop();

        beforeNode.next = afterNode;
        if (i + 1 < beforeHalfway.length) {
            afterNode.next = beforeHalfway[i + 1];
        } else {
            // Handle the case where beforeHalfway and afterHalfway are not equal
            if (afterHalfway.length > 0) {
                afterNode.next = afterHalfway.pop();
                afterNode.next.next = null;
            } else {
                afterNode.next = null;
            }
        }
        i++;
    }
};

// Helper function - Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// // testing
// console.log(reorderList([1,2,3,4]))