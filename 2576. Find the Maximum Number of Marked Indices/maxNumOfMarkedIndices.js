/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy: Sort array, initialize i and j pointers to the beginning of array, create a set for marked indices, iterate through array, check for criteria, return set size
// O(nlogn) // spaceO(n)
// Input: Array of numbers
// Output: Number representing marked set size
var maxNumOfMarkedIndices = function(nums) {
    // Sort array ascending
    nums.sort((a, b) => a - b);

    // Initialize i and j pointers to beginning of array
    let i = 0;
    let j = 1;

    // Create a set for marked indices
    const markedIndices = new Set();

    // Itereate through array
    while (j <= nums.length - 1) {
        // Check for criteria
        if (2 * nums[i] < nums[j]) {
            // Push indices to set
            markedIndices.add(i);
            markedIndices.add(j);

            // Re-assign pointers
            while (markedIndices.has(i)) {
                i++;
            }
            j = i + 1;
            while (markedIndices.has(j)) {
                j++;
            }
        } else {
            j++;
        }
    }
    
    // End loop, return set size
    return markedIndices.size;
};

// // Testing
// console.log(maxNumOfMarkedIndices([3,5,2,4]));
// console.log(maxNumOfMarkedIndices([9,2,5,4]));
// console.log(maxNumOfMarkedIndices([7,6,8]));