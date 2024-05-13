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
// O(1.5n) -> O(n) // Space O(1)
const calculateNumberofNodes = (head) => {
  let counter = -1; 
  let pointer = head;
  while (pointer !== null) {
    counter++;
    pointer = pointer.next;
  }
  return counter;
};

var deleteMiddle = function (head) {
  // Traverse the LL to find number of nodes
  const numberOfNodes = calculateNumberofNodes(head);

  // Ceiling the value to find the midpoint
  const midpoint = Math.ceil(numberOfNodes / 2);

  // Traverse the LL again to get to the midpoint node
  let deleteCounter = 0;
  let pointer = head;
  let laggingPointer = head;
  while (deleteCounter !== midpoint) {
    deleteCounter++;
    laggingPointer = pointer;
    pointer = pointer.next;
  }

  // Delete the midpoint node
  laggingPointer.next = pointer.next;

  // Return the head of the LL
  return head;
};

// // Testing for deleteMiddle()
// head1 = [1,3,4,7,1,2,6]; // Output: [1,3,4,1,2,6]
// console.log(deleteMiddle(head1));

// head2 = [1,2,3,4] // Output: [1,2,4]
// console.log(deleteMiddle(head2));

// head3 = [2,1] // Output: [2]
// console.log(deleteMiddle(head3));
