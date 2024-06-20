/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Strategy: Sliding window
// O(n^2) // spaceO(1)
// Input: Array of numbers, and a frequencyCount
// Output: Number representing count of subarrays
var countSubarrays = function(nums, k) {
    let validSubarrayCount = 0; // Total count of valid subarrays
    let currentMaxElementCount = 0; // Counter for occurrences of the maximum element in the current window
    let maxElement = Math.max(...nums); // Find the maximum element in the array
    let windowStart = 0; // Start index of the sliding window

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === maxElement) {
            currentMaxElementCount++; // Increment the count if the current element is the maximum element
        }

        // Check if the count of maxElement in the window is at least k
        while (currentMaxElementCount >= k) {
            // All subarrays starting from windowStart to windowEnd are valid
            validSubarrayCount += nums.length - windowEnd;

            // Move the start of the window to the right
            if (nums[windowStart] === maxElement) {
                currentMaxElementCount--; // Decrement the currentMaxElementCount if the element being removed is the maximum element
            }
            windowStart++; // Move the window start
        }
    }

    return validSubarrayCount;
};


// // testing
// console.log(countSubarrays([0,0,1,2], 2));