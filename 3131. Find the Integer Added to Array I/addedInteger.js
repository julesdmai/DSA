/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Strategy: Itererate through once each, compare mins
// O(2n) // spaceO(1)
// Input: Array of numbers
// Output: Array of numbers

var addedInteger = function(nums1, nums2) {
    const min1 = Math.min(...nums1);
    const min2 = Math.min(...nums2);
    return min2 - min1;
};

// testing
// console.log(addedInteger([2, 6, 4], [9, 7, 5]))