/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy: Sort array, initialize i & j pointers to the beginning and midpoint of array respectively, check for criteria, advance both pointers as needed, return counter
// O(nlogn) // spaceO(1)
// Input: Array of numbers
// Output: Number representing marked set size
var maxNumOfMarkedIndices = function(nums) {
    // Sort array ascending
    nums.sort((a, b) => a - b);

    // Initialize i and j pointers to beginning of array
    const midpoint = Math.ceil(nums.length / 2);
    let i = 0;
    let j = midpoint;
    let markedIndices = 0;

    // Itereate through array and check for criteria
    while (j < nums.length) {
        if (2 * nums[i] <= nums[j]) {
            markedIndices += 2;
            i++; // Re-assign pointers
            j++;
        } else {
            j++; // Increment to larger number in sorted array
        }
    }
    
    // End loop, return markedIndices
    return markedIndices;
};

// // Testing
// console.log(maxNumOfMarkedIndices([3,5,2,4]));
// console.log(maxNumOfMarkedIndices([9,2,5,4]));
// console.log(maxNumOfMarkedIndices([7,6,8]));