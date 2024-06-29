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

// Strategy: Iterate through LL, form array of chars, join the chars, type-cast to BigInt, multiply by 2, type-cast back to char, iterate through chars forming new LL
// O(n) // spaceO(n)
// Input: LL
// Output: LL
var doubleIt = function(head) {
    if (!head) return head;

    // Form array of chars
    let numbersChar = [];
    let current = head;
    while (current) {
        numbersChar.push(String(current.val));
        current = current.next;
    }
    // Join the chars and type-cast to BigInt
    let originalNumber = BigInt(numbersChar.join(''));

    // Multiply by 2
    let results = originalNumber * 2n; // 2n is the number 2 in BigInt

    // Type-cast big number back to char
    // let resultsChar = BigInt(results).toString();
    let resultsChar = String(results);

    // Iterate through chars forming new LL
    let dummyNode = new ListNode();
    let dummyTail = dummyNode;
    for (let char of resultsChar) {
        dummyTail.next = new ListNode(Number(char));
        dummyTail = dummyTail.next;
    }
    dummyTail.next = null // terminate the LL

    return dummyNode.next; // skip the dummy node
};

// Helper function - Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// // testing
// console.log(doubleIt([1,8,9]));