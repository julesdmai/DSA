/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: array
// Output: number representing index

var findPeakElement = function(nums) {
    // Iterate over elements
    for (let i = 0; i < nums.length; i++) {
        let before = (nums[i - 1] || -Infinity);
        let after = (nums[i + 1] || -Infinity);

        // Check if peak
        if (nums[i] > before && nums[i] > after) {
            return i;
        }
    }
};

// // Testing
// console.log(findPeakElement([1,2,3,1]));
// console.log(findPeakElement([1,2,1,3,5,6,4]));
