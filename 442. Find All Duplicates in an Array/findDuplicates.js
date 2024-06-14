/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Strategy: Use input nums itself to store visited state. Make visited elements negative, 
// Constraints: O(n) // spaceO(1)
var findDuplicates = function(nums) {
    
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        // If the value at the index is already negative, it's a duplicate
        if (nums[index] < 0) {
            results.push(Math.abs(nums[i]));
        }
        // Else mark the value at the index as visited by making it negative
        else {
            nums[index] = -nums[index]
        };
    }

    return results;
};

// // testing
// console.log(findDuplicates([4,3,2,7,8,2,3,1]))
// console.log(findDuplicates([1,1,2]))
// console.log(findDuplicates([1]))