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

// Strategy: Find the middle of the LL, reverse the second half of the LL, merge the two halves of the LL
// O(n) // spaceO(1)
// Input: LL
// Output: LL
var reorderList = function(head) {
    if (!head || !head.next) return;

    // Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    let curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Merge the two halves
    let first = head;
    let second = prev;
    while (second.next) { // continues until end of second half (in reverse order)
        let temp1 = first.next; // stores next node of first half
        let temp2 = second.next; // stores next node of second half

        first.next = second; // links current node of first half to current node of reversed second half
        second.next = temp1; // links current node of reversed second half to the next node of the first half

        first = temp1; // move to the next node in the first half
        second = temp2; // move to the next node in the reversed second half
    }
};

// Helper function - Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// // testing
// console.log(reorderList([1,2,3,4]))