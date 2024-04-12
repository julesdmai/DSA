var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let nextTemp = curr.next; // Save next node
        curr.next = prev;         // Reverse current node's pointer
        prev = curr;              // Move pointers one position ahead.
        curr = nextTemp;
    }
    return prev; // New head of the reversed list
};
