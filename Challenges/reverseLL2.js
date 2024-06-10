/*

Reverse a Linked List
Problem:
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:

Input: head = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

*/

function Node(val) {
    this.val = val;
    this.next = null;
}

const reverseLL = (head) => {
    // Initialize 3 pointers
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next; // Save pointer to next node
        current.next = prev; // Reverse the direction of the pointer
        prev = current; // Move the pointer up
        current = nextNode; // Move the pointer up
    }
    return prev;
}
