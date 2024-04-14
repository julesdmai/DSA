/**
 * @param {number} n
 * @return {number}
 */
// T0 = 0
// T1 = 1
// T2 = 1
// T3 = T0 + T1 + T2 = 0 + 1 + 1 = 2
// T4 = T1 + T2 + T3 = 1 + 1 + 2 = 4
// T5 = T2 + T3 + T4 = 1 + 2 + 4 = 7
// T6 = T3 + T4 + T5 = 2 + 4 + 7 = 13
// T7 = T4 + T5 + T6 = 4 + 7 + 13 = 24

// Input: Number
// Output: Number

// Strategy: Recursion

// Base case are the 3 provided for T0, T1, and T2
// Recursive case is the sum of the three recursive calls.

// Optimize: Memoization

// O(n!)

var tribonacci = function(n) {
    
    // Base case: n is one of our given numbers
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    // Recursive case: Sum
    return (tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1));    
};