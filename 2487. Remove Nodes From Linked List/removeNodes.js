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

// Strategy: Iterate through LL creating monotonic stack, iterate through stack creating new LL
// O(n) // spaceO(n)
// Input: LL
// Output: LL
var removeNodes = function(head) {
    if (!head) return;
    if (!head.next) return head;

    // Create monotonic stack
    let current = head.next;

    const stack = [head.val];
    while (current) {
        while (current.val > stack[stack.length - 1]) {
            stack.pop()
        }
        stack.push(current.val);
        current = current.next;
    }

    const dummyNode = new ListNode();
    let dummyTail = dummyNode;

    // Iterate through stack creating new LL
    for (let i = 0; i < stack.length; i++) {
        let newNode = new ListNode(stack[i]);
        dummyTail.next = newNode;
        dummyTail = dummyTail.next;
    }

    return dummyNode.next;
};

// Helper function - Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

// // testing
// console.log(removeNodes([5,2,13,3,8]));