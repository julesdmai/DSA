/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    // Initialize dp arrays
    let dp = new Array(n + 1).fill(0);
    let g = new Array(n + 1).fill(0);
    
    // Base cases
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    g[1] = 0;
    g[2] = 1;
    
    // Fill dp array using recurrence relations
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2] + 2 * g[i-1]) % MOD;
        g[i] = (g[i-1] + dp[i-2]) % MOD;
    }
    
    return dp[n];
};

// // Example usage
// console.log(numTilings(3)); // Output: 5
// console.log(numTilings(1)); // Output: 1
// console.log(numTilings(4)); // Output: 11
