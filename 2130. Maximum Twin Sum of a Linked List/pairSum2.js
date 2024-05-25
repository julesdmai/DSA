function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Optimized pairSum - O(n) // spaceO(1)
// #1 finding midpoint in O(n/2) instead of O(n)
// 
var pairSum = function(head) {
    if (!head) return 0;
    
    // First: Find middle of linked list
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Second: Reverse the second half of the linked list
    let next = null;
    let prev = null; // Keeps track of the previous node in the reversed LL
    let curr = slow; // Start from the middle
    
    while (curr !== null) {
        next = curr.next;       // Keep track of the next node
        curr.next = prev;       // Reverse the current node's pointer
        prev = curr;            // Move 'prev' one step forward
        curr = next;            // Move 'curr' one step forward
    }
    
    // Third: Traverse the LL from both ends towards the middle calculating the maxSum
    let maxSum = -Infinity;
    let firstHalf = head;
    let secondHalf = prev;
    
    while (secondHalf !== null) {
        maxSum = Math.max(maxSum, firstHalf.val + secondHalf.val);
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return maxSum;
};

// testing