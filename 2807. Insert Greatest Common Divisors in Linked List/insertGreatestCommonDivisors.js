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

// Strategy: Two pointers - fast and slow, traverse, find GCD, insert new node, end loop return head
// O(n) // spaceO(1)
// Input: LL head
// Output: LL head
var insertGreatestCommonDivisors = function(head) {
    // Edge case
    if (head.next === null) return head;

    // Two pointers
    let slow = head.next;
    let fast = head;

    // Traverse
    while (slow !== null) {
        // Find GCD
        let gcdValue = gcd(slow.val, fast.val);
        // Create and insert new node
        let newNode = new ListNode(gcdValue, slow);
        fast.next = newNode;

        // Advance pointers
        slow = slow.next;
        fast = fast.next.next;
    }

    // End loop
    return head;

};

// Helper function to create a node
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};

// Helper function to find GCD of two numbers
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// // testing
// console.log(insertGreatestCommonDivisors([18,6,10,3]));