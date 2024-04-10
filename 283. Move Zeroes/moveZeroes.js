/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// O(n^2)
var moveZeroes = function(nums) {
    // Check edge cases
    if (nums.length === 1) return nums;

    let zeroCounter = 0;

    // Iterate through nums array, shifting the non-0 values forward
    nums.forEach((element, idx) => {
        if (element === 0) {
            zeroCounter ++;
        } else {
            nums[idx - zeroCounter] = nums[idx];
        }
    });

    // Reassign last array elements to be 0
    for (let i = 0; i < zeroCounter; i++) {
        nums[nums.length - 1 - i] = 0;
    }

    return nums;
};