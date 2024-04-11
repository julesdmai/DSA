/**
 * @param {number[]} nums
 * @return {number}
 */
// Question - how big can this nums array get? What if nums array is empty? What if there are two pivot points? 
var pivotIndex = function(nums) {
    // Check edge cases

    // Find sum
    let totalSum = nums.reduce((a,b) => a + b, 0);
    let leftSum = 0;

    // Start a counter
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) return i; // Both sides are balanced
        else leftSum += nums[i]; // Shifts element over
    }

    // End of loop, no pivot point found
    return -1;
};

// Testing for pivotIndex()
const nums = [1,7,3,6,5,6];
console.log(pivotIndex(nums));
const nums2 = [1,2,3];
console.log(pivotIndex(nums2));
