/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Strtategy - 4 pointers - 2 for list1, list2, traversal, and head of list, iterate through list and reassign traversal next value to be lesser value (or not null value), advance pointers
// O(n) // spaceO(1)
// Input: head of LL, head of LL
// Output: head of LL
var mergeTwoLists = function(list1, list2) {
    // Edge case, if either list is empty
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let dummy = new ListNode(); // Create a dummy node
    let current = dummy // Initialiez current pointer to dummy node

    // Iterate through both lists until one is exhausteed
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next; // Advance current node
    }

    // Append the remaining list to the non-exhausted list
    current.next = (list1 === null) ? list2 : list1;

    // Return the merged list by skipping the first dummy node we created
    return dummy.next;
};
