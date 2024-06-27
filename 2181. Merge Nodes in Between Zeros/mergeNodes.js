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

// Strategy: Iterate through LL creating array of values, iterate through array creating LL
// O(n) // spaceO(n)
// Input: Head of LL
// Output: Head of LL
var mergeNodes = function(head) {
    if (!head || !head.next) return head;
    
    // Create array of values
    const nodeValues = [];
    let current = head;
    let total = 0;

    while (current !== null) {
        if (current.val !== 0) {
            total += current.val;
        } else {
            nodeValues.push(total);
            total = 0;
        }
        current = current.next;
    }

    // Iterate through array forming new LL
    let newHead = new ListNode(nodeValues[0]);
    current = newHead;
    for (let i = 1; i < nodeValues.length; i++) {
        current.next = new ListNode(nodeValues[i]);
        current = current.next;
    }

    // Skip the first 0
    return newHead.next;
};


// Helper function - Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// // testing
// console.log(mergeNodes([0,3,1,0,4,5,2,0]));