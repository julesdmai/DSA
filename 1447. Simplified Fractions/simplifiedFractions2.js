/**
 * @param {number} n
 * @return {string[]}
 */

// Strategy: Iterative with Euclidian Algorithm for GCD to check if simplified
// O(n^2) // spaceO(n)
// Input: Number
// Output: Array of strings
var simplifiedFractions = function(n) {
    if (n < 2) return [];
    const results = [];

    // Euclidean algorithm to check for greatest common denominator between two numbers (a > b)
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);

    // Iterate through possible numerators and denominators
    for (let denominator = 2; denominator <= n; denominator++) {
        for (let numerator = 1; numerator < denominator; numerator++) {
            // Check if cannot be simplified - cannot be simplified if numbers have GCD of 1
            if (gcd(numerator, denominator) === 1) {
                results.push(`${numerator}/${denominator}`);   
            }
        }
    }
    return results
};

// // testing
// console.log(simplifiedFractions(6));