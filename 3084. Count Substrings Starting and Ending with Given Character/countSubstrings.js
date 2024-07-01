/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */

// Strategy: # of substrings that start and end with a char 'c' is only dependent on the number of char 'c' in the string s. 
// Therefore, iterate through string, count the number of occurences, return count arithmetic series (n + (n-1) + ...)
// O(n) spaceO(1)
// Input: String, char
// Output: Number
var countSubstrings = function(s, c) {
    let count = 0;
    for (let char of s) {
        if (char === c) count++;
    }

    if (count === 0 || count === 1) return count;
    
    // Return the sum up to the count
    let result = 0;
    for (let i = 0; i <= count; i++) {
        result += i;
    }
    return result;

    // Using formula to calculate sum of first 'count' whole numbers
    // return (count * (count + 1)) / 2;
};

// testing
console.log(countSubstrings('abada','a'));
console.log(countSubstrings('zzz','z'));