/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// Input: array of bits, number
// Output: Number representing most number of consecutive 1's in the array if you can flip k 0's
var longestOnes = function(nums, k) {
    
    // Initialize a window
    let left = 0; 
    maxLength = 0;
    zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++
        }
    
        // If number of 0's exceed k, shrink the window from the left
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--; // If the element at the left pointer is a 0, decrement
            }
            left++; // Move the left pointer to the right, shrinking the window
        }
    
        // Update the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

// // testing
// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0]), k = 2) // Output: 6
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]), k = 3) // Output: 10