/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Create a 2D array (dp) to store the lengths of longest common subsequence
    // dp[i][j] will hold the length of the LCS of text1[0...i-1] and text2[0...j-1]
    const dp = Array(text1.length + 1).fill(null).map(() => Array(text2.length + 1).fill(0));

    // Iterate through each character of text1 and text2
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            // If the characters match, add 1 to the length of LCS of the previous characters
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If they do not match, take the maximum LCS length by either:
                // - excluding the current character of text1
                // - excluding the current character of text2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the longest common subsequence is stored in dp[text1.length][text2.length]
    return dp[text1.length][text2.length];
};

// // Testing
// console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
// console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
// console.log(longestCommonSubsequence("abc", "def")); // Output: 0
// console.log(longestCommonSubsequence("hofubmnylkra", "pqhgxgdofcvmr")); // Output: 2
