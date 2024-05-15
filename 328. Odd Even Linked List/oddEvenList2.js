/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// SpaceO(1) // O(n)
// Single pass, cannot build new LL
// Input: head of a LL
// Output: head of a re-ordered LL
var oddEvenList = function(head) {
    if (!head) return null;
    if (!head.next || !head.next.next) return head; // short-circuit early if LL only has 1 or 2 nodes

    // Initialize variables
    let travPtr = head.next;
    let isOdd = false;
    let evenPtr = head.next;
    let oddPtr = head;
    let evenHead = head.next;

    // Traverse
    while (travPtr.next !== null) {
        travPtr = travPtr.next;
        (isOdd === true) ? isOdd = false : isOdd = true;
        if (isOdd === true) {
            oddPtr.next = travPtr;
            oddPtr = oddPtr.next;
        } else if (isOdd === false) {
            evenPtr.next = travPtr;
            evenPtr = evenPtr.next;
        }
    }

    evenPtr.next = null; // Point tail to null to prevent cycle
    oddPtr.next = evenHead; // Stitch together odd and even
    return head;

};

// // testing
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]