/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n)
// No division operation
var productExceptSelf = function(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);

    let left = 1;
    let right = 1;

    // Forward pass: accumulate the product of all previous elements from the left
    for (let i = 0; i < n; i++) {
        output[i] = left;
        left *= nums[i];
    }

    // Backward pass: accumulate the product of all subsequent elements from the right
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;
};

// Testing
// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
