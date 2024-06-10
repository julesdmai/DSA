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
    // Edge case, if only one node
    if (head.next === null) return head;

    const values = [];

    // Itereate through once, collecting the values
    let traversalPointer = head;
    while (traversalPointer) {
        values.push(head.val);
        traversalPointer = traversalPointer.next;
    }

    // Create new LL, using nodes poppped off in reverse order
    const reversedLL = new Node(values.pop());
    traversalPointer = reversedLL;
    while (values.length) {
        const node = new Node(values.pop());
        traversalPointer.next = node;
        traversalPointer = traversalPointer.next;
    }

    return reversedLL;
}