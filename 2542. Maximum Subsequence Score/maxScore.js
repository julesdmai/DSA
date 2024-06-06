var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;
    let indices = Array.from({length: n}, (_, i) => i);
    
    // Sort indices by nums2 values in ascending order
    indices.sort((a, b) => nums2[a] - nums2[b]);
    
    // Max-heap for the largest values from nums1
    let maxHeap = new MaxPriorityQueue({priority: x => x});
    let sum = 0;
    let maxScore = 0;
    
    for (let i = 0; i < n; i++) {
        let index = indices[i];
        maxHeap.enqueue(nums1[index]);
        sum += nums1[index];
        
        if (maxHeap.size() > k) {
            sum -= maxHeap.dequeue().element;
        }
        
        if (maxHeap.size() == k) {
            let currentScore = sum * nums2[index];
            maxScore = Math.max(maxScore, currentScore);
        }
    }
    
    return maxScore;
};
