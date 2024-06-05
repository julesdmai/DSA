class SmallestInfiniteSet {
    constructor() {
      // Initialize a min-heap to keep track of the smallest elements efficiently
      this.heap = [];
      // A set to keep track of elements that have been added back
      this.addedBack = new Set();
      // A counter to keep track of the smallest integer that hasn't been popped yet
      this.current = 1;
    }
  
    popSmallest() {
      // If the heap is not empty, it means there are elements that have been added back
      if (this.heap.length > 0) {
        // Remove the smallest element from the heap and the set
        const smallest = this.heap.shift();
        this.addedBack.delete(smallest);
        return smallest;
      }
      // If the heap is empty, return the current smallest integer and increment the counter
      return this.current++;
    }
  
    addBack(num) {
      // Only add the number back if it's less than the current smallest integer
      // and it's not already in the heap
      if (num < this.current && !this.addedBack.has(num)) {
        this.addedBack.add(num);
        this.heap.push(num);
        // Maintain the heap property by sorting
        this.heap.sort((a, b) => a - b);
      }
    }
  }
  
  // // Testing
  
  // let smallestInfiniteSet = new SmallestInfiniteSet();
  // console.log(smallestInfiniteSet.popSmallest()); // return 1, remove it from the set
  // smallestInfiniteSet.addBack(2); // no change, 2 is already in the set
  // console.log(smallestInfiniteSet.popSmallest()); // return 2, remove it from the set
  // console.log(smallestInfiniteSet.popSmallest()); // return 3, remove it from the set
  // smallestInfiniteSet.addBack(1); // 1 is added back to the set
  // console.log(smallestInfiniteSet.popSmallest()); // return 1, remove it from the set again
  // console.log(smallestInfiniteSet.popSmallest()); // return 4, remove it from the set
  // console.log(smallestInfiniteSet.popSmallest()); // return 5, remove it from the set
  