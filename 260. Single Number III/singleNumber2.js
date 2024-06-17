/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Strategy: XOR all numbers
// O(n) // spaceO(1)
// Input: Array of numbers
// Output: Array of numbers representing the numbers that only appeared once
var singleNumber = function(nums) {
    // Step 1: XOR all the numbers to get the XOR of the two unique numbers
    let xorResult = 0;
    for (const num of nums) {
        xorResult ^= num;
    }

    // Step 2: Find a set bit in the xorResult
    // This bit will be different between the two unique numbers
    let bitmask = 1;
    while ((xorResult & bitmask) === 0) {
        bitmask <<= 1;
    }

    // Step 3: Divide the numbers into two groups and XOR each group
    let num1 = 0, num2 = 0;
    for (const num of nums) {
        if ((num & bitmask) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

// testing
console.log(singleNumber([1,2,1,3,2,5]))
console.log(singleNumber([-1,0]))
console.log(singleNumber([0,1]))