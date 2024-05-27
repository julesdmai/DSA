/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: array
// Output: number representing index

// Strategy: Binary Search AKA go towards highpoint

// O(logn) // spaceO(1)
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;


    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If we are on a rising slope /// THEN the peak is to the right
        if (nums[mid] < nums[mid + 1]) {
            left = mid;
        }

        // If we are on a descending slope \\\ THEN the peak is to the left
        else if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
    }

    return left;
};

// // Testing
// console.log(findPeakElement([1,2,3,1]));
// console.log(findPeakElement([1,2,1,3,5,6,4]));
