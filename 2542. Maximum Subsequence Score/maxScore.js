var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;
    let pairs = [];
    
    // Create pairs of (nums1[i], nums2[i])
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    
    // Sort pairs by nums2 values in descending order
    pairs.sort((a, b) => b[1] - a[1]);
    
    let minHeap = new MinPriorityQueue({priority: x => x});
    let sum = 0;
    let maxScore = 0;
    
    for (let i = 0; i < n; i++) {
        let [num1, num2] = pairs[i];
        minHeap.enqueue(num1);
        sum += num1;
        
        if (minHeap.size() > k) {
            sum -= minHeap.dequeue().element;
        }
        
        if (minHeap.size() == k) {
            let currentScore = sum * num2;
            maxScore = Math.max(maxScore, currentScore);
        }
    }
    
    return maxScore;
};
