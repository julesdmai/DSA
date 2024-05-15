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
var oddEvenList = function(head) {
    if (!head || !head.next) return head; // Edge case: no need to process if list is short

    let odd = head, even = head.next, evenHead = even;

    // Look at next two spaces ahead and leapfrogs the odd and even pointers
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next; // Move odd pointer to the next odd node
        even.next = odd.next;
        even = even.next; // Move even pointer to the next even node
    }

    odd.next = evenHead; // Concatenate even list after the odd list
    return head;
};


// // testing
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]