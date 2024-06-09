/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let left = 0;
    let right = costs.length - 1;
    let totalCost = 0;

    // Priority queues for left and right candidates
    const leftPQ = new PriorityQueue((a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]));
    const rightPQ = new PriorityQueue((a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]));

    // Fill initial candidates pool
    for (let i = 0; i < candidates; i++) {
        if (left <= right) leftPQ.push([costs[left], left]);
        left++;
        if (left <= right) rightPQ.push([costs[right], right]);
        right--;
    }

    for (let i = 0; i < k; i++) {
        if (leftPQ.isEmpty()) {
            const [cost, index] = rightPQ.pop();
            totalCost += cost;
            if (left <= right) rightPQ.push([costs[right], right]);
            right--;
        } else if (rightPQ.isEmpty()) {
            const [cost, index] = leftPQ.pop();
            totalCost += cost;
            if (left <= right) leftPQ.push([costs[left], left]);
            left++;
        } else {
            const [leftCost, leftIndex] = leftPQ.peek();
            const [rightCost, rightIndex] = rightPQ.peek();
            if (leftCost < rightCost || (leftCost === rightCost && leftIndex < rightIndex)) {
                const [cost, index] = leftPQ.pop();
                totalCost += cost;
                if (left <= right) leftPQ.push([costs[left], left]);
                left++;
            } else {
                const [cost, index] = rightPQ.pop();
                totalCost += cost;
                if (left <= right) rightPQ.push([costs[right], right]);
                right--;
            }
        }
    }

    return totalCost;
};

class PriorityQueue {
    constructor(comparator = (a, b) => a < b) {
        this._heap = [];
        this._comparator = comparator;
    }
    
    size() {
        return this._heap.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    
    peek() {
        return this._heap[0];
    }
    
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > 0) {
            this._swap(0, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    
    _siftUp() {
        let node = this.size() - 1;
        while (node > 0 && this._greater(node, Math.floor((node - 1) / 2))) {
            this._swap(node, Math.floor((node - 1) / 2));
            node = Math.floor((node - 1) / 2);
        }
    }
    
    _siftDown() {
        let node = 0;
        while (
            (node * 2 + 1 < this.size() && this._greater(node * 2 + 1, node)) ||
            (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node))
        ) {
            let maxChild = (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node * 2 + 1)) ? node * 2 + 2 : node * 2 + 1;
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}
