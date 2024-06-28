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

// Strategy: Iterate through LL creating monotonic stack of nodes, iterate through stack reassigning pointers
// O(n) // spaceO(1)
// Input: LL
// Output: LL
var removeNodes = function(head) {
    if (!head) return;
    if (!head.next) return head;

    // Create monotonic stack
    let current = head.next;

    const stack = [head];
    while (current) {
        while (stack.length > 0 && current.val > stack[stack.length - 1].val) {
            stack.pop()
        }
        stack.push(current);
        current = current.next;
    }

    // Iterate through stack reassigning pointers
    for (let i = 0; i < stack.length; i++) {
        stack[i].next = stack[i + 1];
    }
    stack[stack.length - 1].next = null; // Terminate the LL

    return stack[0];
};

// // testing
// console.log(removeNodes([5,2,13,3,8]));