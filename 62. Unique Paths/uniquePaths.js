/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    // Initialize the DP table
    const dp = Array(m).fill().map(() => Array(n).fill(1));

    /* m = 3, n = 7 -> dp = 2D table of 1's
    1 1 1 1 1 1 1
    1 1 1 1 1 1 1
    1 1 1 1 1 1 1
    */

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    /* After the first row iteration, the dp table will look like this
    1 1 1 1 1 1 1
    1 2 3 4 5 6 7
    1 1 1 1 1 1 1
    */


    /* After the second row iteration, the dp table will look like this
    1 1 1 1 1 1 1
    1 2 3 4 5 6 7
    1 3 6 10 15 21 28
    */

    // The value at dp[m - 1][n - 1] gives the number of unique paths from the top left corner to the bottom-right corner
    return dp[m - 1][n - 1];

};

// console.log(uniquePaths(3, 7));