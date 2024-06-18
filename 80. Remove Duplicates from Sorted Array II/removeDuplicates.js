/**
 * @param {number[]} nums
 * @return {number}
 */


// Strategy: Iterate through, comparing to previous, increment counter variable, if counter > 2, delete element
// O(n^2) due to splicing // spaceO(1)
// Input: Array of numbers
// Output: Number representing nums length
var removeDuplicates = function(nums) {
    let counter = 1;

    // Starting at counter = 1 and index 1
    for (let i = 1; i < nums.length; i++) {
        // Compare this element to the previous
        if (nums[i] === nums[i - 1]) {
            counter++;
            // If we have already encountered two of the same element, then delete this element
            if (counter > 2) {
                nums.splice(i, 1);
                i--; // Re-visit this index with new element since splice
            }
        } else {
            counter = 1; // New element, reset counter
        }
    }

    // Return ending array length
    return nums.length;
};

// // Testing
// console.log(removeDuplicates([1,1,1,2,2,3]));
// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));