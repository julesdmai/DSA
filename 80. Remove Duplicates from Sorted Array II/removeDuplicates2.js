/**
 * @param {number[]} nums
 * @return {number}
 */


// Strategy: Iterate through keeping track of the insertPos, compare new element to insertPos - 2
// O(n) // spaceO(1)
// Input: Array of numbers
// Output: Number representing nums length
var removeDuplicates = function(nums) {
    let insertPosition = 2; // We always keep 0th and 1st elements

    for (let i = 2; i < nums.length; i++) {
        // If this element is new, insert into newPosition
        if (nums[i] !== nums[insertPosition - 2]) {
            nums[insertPosition] = nums[i];
            insertPosition++;
        }
        // Else if element is old, then we simply iterate
    }

    return nums.length;
};

// // Testing
// console.log(removeDuplicates([1,1,1,2,2,3]));
// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));