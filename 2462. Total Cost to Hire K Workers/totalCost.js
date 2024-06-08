/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();
    let left = 0;
    let right = costs.length - 1;
    let totalCost = 0;
    
    // Fill initial candidates pool
    for (let i = 0; i < candidates; i++) {
        if (left <= right) leftHeap.insert([costs[left], left]);
        left++;
        if (left <= right) rightHeap.insert([costs[right], right]);
        right--;
    }

    for (let i = 0; i < k; i++) {
        if (leftHeap.isEmpty()) {
            const [cost, index] = rightHeap.extractMin();
            totalCost += cost;
            if (left <= right) rightHeap.insert([costs[right], right]);
            right--;
        } else if (rightHeap.isEmpty()) {
            const [cost, index] = leftHeap.extractMin();
            totalCost += cost;
            if (left <= right) leftHeap.insert([costs[left], left]);
            left++;
        } else {
            const [leftCost, leftIndex] = leftHeap.peek();
            const [rightCost, rightIndex] = rightHeap.peek();
            if (leftCost < rightCost || (leftCost === rightCost && leftIndex < rightIndex)) {
                const [cost, index] = leftHeap.extractMin();
                totalCost += cost;
                if (left <= right) leftHeap.insert([costs[left], left]);
                left++;
            } else {
                const [cost, index] = rightHeap.extractMin();
                totalCost += cost;
                if (left <= right) rightHeap.insert([costs[right], right]);
                right--;
            }
        }
    }

    return totalCost;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] < this.heap[parentIndex][0] || 
                (this.heap[index][0] === this.heap[parentIndex][0] && this.heap[index][1] < this.heap[parentIndex][1])) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;
            
            if (leftChildIndex <= lastIndex && 
                (this.heap[leftChildIndex][0] < this.heap[smallestIndex][0] || 
                (this.heap[leftChildIndex][0] === this.heap[smallestIndex][0] && this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]))) {
                smallestIndex = leftChildIndex;
            }
            
            if (rightChildIndex <= lastIndex && 
                (this.heap[rightChildIndex][0] < this.heap[smallestIndex][0] || 
                (this.heap[rightChildIndex][0] === this.heap[smallestIndex][0] && this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]))) {
                smallestIndex = rightChildIndex;
            }
            
            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }
}
