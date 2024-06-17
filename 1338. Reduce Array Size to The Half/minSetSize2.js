/**
 * @param {number[]} arr
 * @return {number}
 */
// Strategy: Create hashmap, use max heap, extract from max heap
// Input: O(nlogk) // spaceO(n), more performant when k (the number of unique elements) is significantly smaller than n meaning high frequency of a few k
// Ouptut: Number representing array length
var minSetSize = function(arr) {
    // Step 1: Create a hashmap to count frequencies of each number
    const frequencyMap = {};
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Step 2: Use a max heap to store frequencies
    const maxHeap = new MaxPriorityQueue({ priority: (x) => x }); // from js-priority-queue
    for (const freq of Object.values(frequencyMap)) {
        maxHeap.enqueue(freq);
    }

    // Step 3: Extract from max heap until at least half the array is removed
    let removedCount = 0;
    let setSize = 0;
    const halfSize = arr.length / 2;

    while (removedCount < halfSize) {
        removedCount += maxHeap.dequeue().element;
        setSize++;
    }

    return setSize;
};


// testing
// console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))
// console.log(minSetSize([7,7,7,7,7,7]))
// console.log(minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]))







// // Implement heap ourselves
// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this._heapifyUp();
//     }

//     extractMax() {
//         if (this.heap.length < 2) {
//             return this.heap.pop();
//         }

//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this._heapifyDown();
//         return max;
//     }

//     _heapifyUp() {
//         let index = this.heap.length - 1;
//         const element = this.heap[index];
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             const parent = this.heap[parentIndex];
//             if (element <= parent) break;
//             this.heap[index] = parent;
//             index = parentIndex;
//         }
//         this.heap[index] = element;
//     }

//     _heapifyDown() {
//         let index = 0;
//         const length = this.heap.length;
//         const element = this.heap[index];
//         while (true) {
//             const leftChildIndex = 2 * index + 1;
//             const rightChildIndex = 2 * index + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIndex < length) {
//                 leftChild = this.heap[leftChildIndex];
//                 if (leftChild > element) {
//                     swap = leftChildIndex;
//                 }
//             }

//             if (rightChildIndex < length) {
//                 rightChild = this.heap[rightChildIndex];
//                 if (
//                     (swap === null && rightChild > element) ||
//                     (swap !== null && rightChild > leftChild)
//                 ) {
//                     swap = rightChildIndex;
//                 }
//             }

//             if (swap === null) break;
//             this.heap[index] = this.heap[swap];
//             index = swap;
//         }
//         this.heap[index] = element;
//     }

//     size() {
//         return this.heap.length;
//     }
// }