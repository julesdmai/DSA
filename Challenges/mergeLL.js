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
    if (list1 === null || list2 === null) return (list1 || list2);

    let mergedHead;
    let mergedTail;
    
    if (list1.val <= list2.val) {
        mergedHead = list1;
        mergedTail = list1;
        list1 = list1.next;
    } else {
        mergedHead = list2;
        mergedTail = list2;
        list2 = list2.next;
    }

    // Add to mergedTail
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            mergedTail.next = list1;
            mergedTail = mergedTail.next;
            list1 = list1.next;
        } else {
            mergedTail.next = list2;
            mergedTail = mergedTail.next;
            list2 = list2.next;
        }
    }

    // Attach the remaining part of hte list
    if (list1 !== null) {
        mergedTail.next = list1;
    } else {
        mergedTail.next = list2;
    }

    // End of loop, both lists are now pointing to null, return mergedHead
    return mergedHead;

}