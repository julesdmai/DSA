/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // Initialize variables
    let counter = 0;
    let left = 0;
    let right = 1;
    let targetToFind;

    // Iterate through nums
    while (nums.length > 0) {
        targetToFind = k - nums[left];

        // Found a match
        if (nums[right] === targetToFind) {
            counter++;

            nums.splice(right, 1); // Remove these two numbers
            nums.splice(left, 1); 
            console.log(nums);

            // Reset left and right
            left = 0;
            right = 1;
        } else if (right === nums.length - 1) {
            left++;
            right = left + 1;
            if (right >= nums.length) break;
        } else {
            // Did not find a match
            if (right < nums.length )
            right++ 
        }
        

    }
    return counter;
};