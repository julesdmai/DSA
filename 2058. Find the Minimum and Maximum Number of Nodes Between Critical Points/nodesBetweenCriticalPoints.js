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

// Strategy: Iterate through LL collecting critical points, process critical points for min and max distances
// O(n) // spaceO(n)
// Input: LL
// Output: Array of numbers representing min distance and max distance
var nodesBetweenCriticalPoints = function(head) {
    if (!head || !head.next) return [-1, -1];

    // Iterate through LL and collect critical pointers
    const criticalIndices = [];
    let current = head.next;
    let prev = head;
    let index = 1;

    while (current.next) {
        let nextNode = current.next;
        if (current.val > prev.val && current.val > nextNode.val
            || current.val < prev.val && current.val < nextNode.val) {
                criticalIndices.push(index);
            } 
        prev = current;
        current = nextNode;
        index++;
    }

    // Short circuit
    if (criticalIndices.length < 2) return [-1, -1];

    // Process critical points for min and max distances
    let minDistance = Infinity;
    for (let i = 1; i < criticalIndices.length; i++) {
        minDistance = Math.min(minDistance, criticalIndices[i] - criticalIndices[i - 1]); 
    };
    let maxDistance = criticalIndices[criticalIndices.length - 1] - criticalIndices[0];

    // Return [min, max]
    return [minDistance, maxDistance];
};

// // testing
// console.log(nodesBetweenCriticalPoints([5,3,1,2,5,1,2]))