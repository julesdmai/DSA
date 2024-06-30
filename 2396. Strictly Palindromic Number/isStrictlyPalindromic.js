/**
 * @param {number} n
 * @return {boolean}
 */

// Strategy: isPalindrome helper function, iterate through bases (2 to n - 2), check if !isPalindrome return false, end loop return true
// O(n^2) // spaceO(1)
// Input: Number
// Output: Boolean
var isStrictlyPalindromic = function(n) {
    // Iterate through bases (2 to n - 2)
    for (let i = 2; i <= n - 2; i++) {
        let baseI = n.toString(i);
        if (!isPalindrome(baseI)) return false;
    }
    // End loop
    return true;
};

// Helper function - Determine if string is palindrome
const isPalindrome = (string) => {
    const midpoint = string.length / 2;
    for (let i = 0; i < midpoint; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// // testing
// console.log(isPalindrome('1001'));
// console.log(isPalindrome('1000'));

// console.log(isStrictlyPalindromic(9))
// console.log(isStrictlyPalindromic(4))

// Alternative answer - always return false
// This is because number n in base (n -2) will always = 12
// Ex. n = 9 in base 7 (which is equal to n - 2)
// 9 = 1 * 7^1 + 2 * 7^0 = 12 (in base 7)
// Ex2. n = 10 in base 8 (n - 2)
// 10 = 1 * 8^1 + 2 * 8^0 = 12 (in base 8)
// This generalizes to 
// n = 1 * b^1 + 2 * b^0 = 12 (in base b)