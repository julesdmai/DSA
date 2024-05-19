/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Input: Array of numbers
// Output: Boolean
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false; // Not enough elements for a triplet

    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // Update first if current number is smaller or equal
        } else if (num <= second) {
            second = num; // Update second if current number is smaller or equal to second but greater than first
        } else {
            return true; // Found a number greater than both first and second
        }
    }
    return false; // No increasing triplet found
};

// // Testing
// nums1 = [1,2,3,4,5] // Output: true
// nums2 = [5,4,3,2,1] // Output: false
// nums3 = [2,1,5,0,4,6] // Output: true