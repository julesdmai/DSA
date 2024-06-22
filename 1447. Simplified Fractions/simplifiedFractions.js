/**
 * @param {number} n
 * @return {string[]}
 */

// Strategy: Recursion
// O(n^2) // spaceO(n)
// Input: Number
// Output: Array of strings
var simplifiedFractions = function(n) {
    if (n < 2) return [];

    const results = [];
    for (let i = 1; i < n; i++) {
        // If this fraction cannot be simplified, then include it
        if (!canBeSimplified(i, n)) {
            results.push(`${i}/${n}`)
        }
    }

    // Combine our current results with the results from the (n - 1) iteration
    return results.concat(simplifiedFractions(n - 1));
};

// Helper function to check if fraction can be simplified
const canBeSimplified = (topNum, bottomNum) => {
    for (let i = 2; i < bottomNum; i++) {
        let topDivided = (topNum / i);
        let botDivided = (bottomNum / i);
        
        if (Number.isInteger(topDivided) && Number.isInteger(botDivided)) return true;
    }
    // End of loop, this numerator and denominator cannot be simplified
    return false;
};

// // testing
// console.log(simplifiedFractions(6));