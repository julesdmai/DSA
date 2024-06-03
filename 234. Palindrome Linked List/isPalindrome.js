/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let traversalPtr = head;
    const values = [];

    // Iterate through LL, collect values
    while (traversalPtr !== null) {
        values.push(traversalPtr.val);
        traversalPtr = traversalPtr.next;
    };
    
    // Iterate through array checking for palindrome
    const midpoint = (values.length / 2);
    for (let i = 0; i < midpoint; i++) {
        if (values[i] !== values[values.length - 1 - i]) return false;
    }

    // Finished check for palindrome
    return true;
};