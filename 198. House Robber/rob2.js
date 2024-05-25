/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy - dp
// O(n) // spaceO(n)
var rob = function(nums) {
    // Handle edge cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // set up DP array
    const dp = new Array(nums.length).fill(0);

    // Initialize first two values of DP array
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Iterate through input array and fill out dp array
    // We always compare maxSoFar (dp[i - 1]) with previous maxSoFar + current num (dp[i - 2]) + nums[i])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[dp.length - 1];


};

// // testing
// console.log(rob([1,2,3,1])); // -> 4
// console.log(rob([2,7,9,3,1])); // -> 12
// console.log(rob([2, 1, 1, 2 ])); // -> 4
// console.log(rob([ 6, 6, 4, 8, 4, 3, 3, 10 ])); // -> 27
