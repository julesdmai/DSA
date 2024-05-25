/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

// O(n) // spaceO(n)
var pairSum = function(head) {
    const values = [];
    let maxSum = -Infinity;
    
    let traversalPointer = head;
    while (traversalPointer !== null) {
        // Store into memory
        values.push(traversalPointer.val);

        // Move the pointer
        traversalPointer = traversalPointer.next;
    }

    // Now we have the array
    for (let i = 0; i < values.length / 2; i++) {
        let left = values[i];
        let right = values[values.length - 1 - i];
        maxSum = Math.max(left + right, maxSum);
    }

    return maxSum;
};

// testing