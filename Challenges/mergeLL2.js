/*
Merge Two Sorted Lists
Problem:
You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.

Example:
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

*/

// Strategy 

const mergeLL = (list1, list2) => {
    // Base case, return non-null list
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    // Recursive case - take the list with the smaller value
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); // The rest of the LL is recursive invocation // Return the list
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}