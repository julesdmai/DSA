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
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// O(n) = O(n) + O(n) = O(2n)



var reverseList = function(head) {
    // Check edge cases
    if (!head) return null;
    // Array to hold the values
    const values = [];
    // Traverse down the LL
    let travPtr = head;
    while (travPtr) {
        values.push(travPtr.val); // Create the values array
        travPtr = travPtr.next; // Move the pointer
    }
    const reversedValues = values.reverse();
    // Create a new LL
    const reversedLL = new ListNode(reversedValues.shift());
    const reversedLLHead = reversedLL;
    travPtr = reversedLL;
    while (values.length > 0) {
        const newNode = new ListNode(reversedValues.shift());
        travPtr.next = newNode;
        travPtr = travPtr.next;
    }
    return reversedLLHead;
};
// Testing for reverseList();