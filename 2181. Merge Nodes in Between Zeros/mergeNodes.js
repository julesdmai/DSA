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

// Strategy: Create a dummy node, iterate through LL keeping track of runningTotal, add new nodes to dummy node, end loop return dummyNode.next
// O(n) // spaceO(n)
// Input: Head of LL
// Output: Head of LL
var mergeNodes = function(head) {
    // Edge case
    if (!head || !head.next) return head;
    
    // Initialize variables
    let current = head.next // skipping the first zero
    let dummyNode = new ListNode(0); // create a dummy node
    let newTail = dummyNode // will be used to add to the tail
    let runningTotal = 0;

    // Traverse the LL
    while (current) {
        runningTotal += current.val;
        // Check for zero, create node, attach to tail, reset runningTotal
        if (current.val === 0) {
            newTail.next = new ListNode(runningTotal);
            runningTotal = 0; // reset
            newTail = newTail.next;
        } 

        // Advance pointer
        current = current.next;
    } 

    // Return head of new LL
    return dummyNode.next;
};


// Helper function - Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// // testing
// console.log(mergeNodes([0,3,1,0,4,5,2,0]));