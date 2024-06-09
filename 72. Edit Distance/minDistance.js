/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const k = word2.length;
    
    // Create a 2D array with (m+1) x (k+1) size
    const dp = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
    
    // Initialize the first row and first column
    for (let i = 0; i <= m; i++) dp[i][0] = i; // word1 to empty word2
    for (let j = 0; j <= k; j++) dp[0][j] = j; // empty word1 to word2
    
    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= k; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Characters match
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j],    // Deletion
                    dp[i][j - 1],    // Insertion
                    dp[i - 1][j - 1] // Replacement
                ) + 1;
            }
        }
    }
    
    return dp[m][k]; // The answer is in dp[m][k]
};
