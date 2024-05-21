/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) // spaceO(1)
var longestSubarray = function(nums) {
    // edge case
    // Initialize variables
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let zeroCount = 0;

    // Iterate over each element
    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++; // Keep track of the zeroes we have encountered
        }
        
        while (zeroCount > 1) { // If we have encountered 2nd zero, we need to shrink the sliding window
            if (nums[left] === 0) {
                zeroCount--; // If left is positioned at a 0, we can decrement zeroCount to represent the 0 "leaving the window"
            }
            left++;
        }

        maxLength = Math.max((right - left), maxLength); // Calculate max
        right++; // Increment right for next iteration
    }

    // Handle edge case
    if (maxLength === nums.length) {
        maxLength--; // If input array is all 1's, we must eliminate one element regardless
    }

    return maxLength;
};

// // testing
// console.log(longestSubarray([1, 1, 0, 1])); // Output: 3
// console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // Output: 5
// console.log(longestSubarray([1, 1, 1])); // Output: 2