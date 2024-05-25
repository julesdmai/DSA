/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy - dp
// O(n) // spaceO(1) // Optimized further eliminating need for dp array
var rob = function(nums) {
    // Handle edge cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // Initialize variables to store max amount of money that can be stolen up to the past two houses
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);

    // Iterate through input array // We always compare maxSoFar (dp[i - 1]) with previous maxSoFar + current num (dp[i - 2]) + nums[i])
    for (let i = 2; i < nums.length; i++) {
        let current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

// // testing
// console.log(rob([1,2,3,1])); // -> 4
// console.log(rob([2,7,9,3,1])); // -> 12
// console.log(rob([2, 1, 1, 2 ])); // -> 4
// console.log(rob([ 6, 6, 4, 8, 4, 3, 3, 10 ])); // -> 27
