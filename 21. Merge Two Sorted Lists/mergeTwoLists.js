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

    let mergedLL;
    let traversalPtr;

    // Assign traversalPtr to list with smaller head value
    if (list1.val <= list2.val) {
        mergedLL = list1; 
        traversalPtr = list1;
        list1 = list1.next;
    } else {
        mergedLL = list2;
        traversalPtr = list2;
        list2 = list2.next;
    }

    // Iterate through both LL using the traversal pointer
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            traversalPtr.next = list1;
            traversalPtr = traversalPtr.next
            list1 = list1.next;
        } else {
            traversalPtr.next = list2;
            traversalPtr = traversalPtr.next
            list2 = list2.next;
        }
    }

    // Append the remaining list
    if (list1 === null) {
        traversalPtr.next = list2;
    } else {
        traversalPtr.next = list1;
    }

    // At end of loop, we return the head of the list that we started with
    return mergedLL;
};
