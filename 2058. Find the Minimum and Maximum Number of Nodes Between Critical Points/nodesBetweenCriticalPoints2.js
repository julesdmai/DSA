/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// Strategy: Single pass, track indices of first and last, calculate min distance and max distance in traversal
// O(n) // spaceO(1)
// Input: LL
// Output: Array of numbers representing min distance and max distance
var nodesBetweenCriticalPoints = function(head) {
    if (!head || !head.next || !head.next.next) return [-1, -1];

    let firstCriticalIndex = null;
    let lastCriticalIndex = null;
    let minDistance = Infinity
    let index = 1;
    let prev = head;
    let current = head.next;

    // Iterate through LL, update firstCriticalIndex, lastCriticalIndex, and minDistance
    while (current.next) {
        const nextNode = current.next;
        if ((current.val > prev.val && current.val > nextNode.val)
        || (current.val < prev.val && current.val < nextNode.val)) {
            if (firstCriticalIndex === null) {
                firstCriticalIndex = index;
            } else if (lastCriticalIndex !== null) {
                minDistance = Math.min(minDistance, index - lastCriticalIndex);
            }
            lastCriticalIndex = index;
        }
        prev = current;
        current = nextNode;
        index++;
    }

    // If we have less than 2 critical indices, then we short-circuit
    if (lastCriticalIndex === null || firstCriticalIndex === lastCriticalIndex) return [-1, -1];

    const maxDistance = lastCriticalIndex - firstCriticalIndex;
    return [minDistance, maxDistance];
};

// // testing
// console.log(nodesBetweenCriticalPoints([5,3,1,2,5,1,2]))