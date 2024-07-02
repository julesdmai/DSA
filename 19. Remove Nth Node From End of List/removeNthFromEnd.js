/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Strategy: Use 3 pointers, initialize vanguard pointer to n in front of current, advance all pointers until vanguard is null, reassign next pointers to remove the current pointer node, return head
// O(n) // spaceO(1)
// Input: LL, number
// Output: LL
var removeNthFromEnd = function(head, n) {
    if (!head) return head;

    // 3 pointers
    let vanguard = head;
    let current = head;
    let prev = null;

    // Initialize vanguard to correct position - n positions in front of current
    for (let i = 0; i < n; i++) {
        vanguard = vanguard.next;
    }

    // Advance all pointers until vanguard is null
    while (vanguard) {
        vanguard = vanguard.next;
        prev = current;
        current = current.next;
    }

    // Reassign next pointers to remove current pointer node
    if (current === head) {
        head = head.next;
    } else {
        prev.next = current.next;
    }

    // Return head
    return head;
};

// // testing
// console.log(removeNthFromEnd([1,2,3,4,5], 2));
// console.log(removeNthFromEnd([1], 1));
// console.log(removeNthFromEnd([1,2], 1));