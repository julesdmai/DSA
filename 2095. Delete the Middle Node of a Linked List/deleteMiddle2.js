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

// O(n) // SpaceO(1)
// Strategy: Two pointers - tortoise and the hare
var  deleteMiddle = function(head) {
    if (!head.next) return null // If there's only one node, return null

    let slow = head;
    let fast = head;
    let prev = null; // To keep track of the node before the middle node

    // Fast pointer moves twice as fast as the slow pointer
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    // At this point, we've reached the end with the fast pointer, meaning the slow pointer is at the midpoint
    prev.next = slow.next; // Delete the node

    return head;
}


// // Testing for deleteMiddle()
// head1 = [1,3,4,7,1,2,6]; // Output: [1,3,4,1,2,6]
// console.log(deleteMiddle(head1));

// head2 = [1,2,3,4] // Output: [1,2,4]
// console.log(deleteMiddle(head2));

// head3 = [2,1] // Output: [2]
// console.log(deleteMiddle(head3));
