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

// Strategy: Reverse LL, multiply each node by 2 and store variable to "carry over", reverse LL to original order
// O(n) // spaceO(1)
// Input: LL
// Output: LL
var doubleIt = function(head) {
    if (!head) return head;

    // Reverse the LL
    const reversedLL = reverseList(head);

    // Multiple each node by 2 and store carry over
    let carryOver = 0;
    let current = reversedLL;

    while (current) {
        let product = (current.val * 2) + carryOver;
        carryOver = Math.floor(product / 10);
        current.val = product % 10;
        current = current.next;
    }

    // If there's remaining carryOver, add a new node at the end
    if (carryOver > 0) {
        let newNode = new ListNode(carryOver);
        let tail = reversedLL;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }

    // Reverse LL back to original order
    return reverseList(reversedLL);
};

// Helper function - reverse a LL
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

// Helper function - Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// // testing
// console.log(doubleIt([1,8,9]));