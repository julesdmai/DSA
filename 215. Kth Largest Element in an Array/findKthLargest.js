/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get the parent index
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    // Get the left child index
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    // Get the right child index
    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // Swap two elements in the heap
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    // Insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    // Remove and return the root element of the heap
    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    // Heapify down to maintain heap property
    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    // Get the root element of the heap
    peek() {
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();

    for (let num of nums) {
        minHeap.insert(num);

        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    return minHeap.peek();
};

// // Testing
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Output: 4
// console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5
