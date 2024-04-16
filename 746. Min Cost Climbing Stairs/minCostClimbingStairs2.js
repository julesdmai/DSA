/**
 * @param {number[]} cost
 * @return {number}
 */

// Strategy - Binary Tree and doing DFS
// Start at either index 0 or index 1
// Take either 1 step or 2 steps
// If position is out of bounds, then return
// If position reaches last element, then compare totalCost with maxTotalCost


var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    if (n === 0) return 0;
    if (n === 1) return cost[0];

    // dp array to store the minimum cost to reach each step
    let dp = Array(n).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }

    // Return the minimum cost to reach the top from the last or second last step
    return Math.min(dp[n-1], dp[n-2]);
};

// // Example tests
// console.log(minCostClimbingStairs([10, 15, 20])); // Should return 15
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Should return 6