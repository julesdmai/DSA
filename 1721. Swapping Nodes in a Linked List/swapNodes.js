/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// Strategy: Itereate through LL forming an array of references, swap the kth node from beginning/end, iterate through array reassigning pointers
// O(n) // spaceO(1)
// Input: LL, number
// Output: LL
var swapNodes = function(head, k) {
    if (!head || !head.next) return head;

    // Form array of nodes
    const nodes = [];
    let current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }

    // Swap the kth node from beginning and kth node from end
    [nodes[k - 1], nodes[nodes.length - k]] = [nodes[nodes.length - k], nodes[k - 1]]

    // Iterate through array, reassigning pointers
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null // Terminate the LL

    // Return lead pointer
    return nodes[0];
};

// // testing
// console.log(swapNodes([1,2,3,4,5], 2))