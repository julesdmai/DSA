/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) // spaceO(1)
var longestSubarray = function(nums) {
    // edge case
    // Initialize variables
    let longestStretch = -Infinity;
    let currentStretch = 0;
    let leftOfZero = 0;
    let rightOfZero = 0;

    let i = 0;
    while (nums[i] === 0 || nums[i] === 1) {
        if (nums[i] === 0) {
            currentStretch = leftOfZero + rightOfZero;
            longestStretch = Math.max(currentStretch, longestStretch);


            leftOfZero = rightOfZero;
            rightOfZero = 0;
            i++
        }
        else if (nums[i] === 1) {
            rightOfZero++;
            i++
        }
    }
    currentStretch = leftOfZero + rightOfZero;
    longestStretch = Math.max(currentStretch, longestStretch);
    if (longestStretch === nums.length) longestStretch--;

    return longestStretch;
};

// testing