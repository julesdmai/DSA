/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 // Strategy: Euclidian Algorithm - GCD(a,b) === GCD(b, a%b) but for strings
 // O(n^2) from slice method O(n) and startsWith method O(n)
 // Input: String, String
 // Output: String 
 var gcdOfStrings = function(str1, str2) {
    // Base case: If one string is empty, the other string is the GCD
    if (str1 === '') return str2;
    if (str2 === '') return str1;

    // If str1 starts with str2, we reduce the problem by removing the prefix str2 from str1
    // The idea is similar to subtracting numbers in the Euclidean algorithm
    if (str1.startsWith(str2)) {
        return gcdOfStrings(str1.slice(str2.length), str2);
    }

    // If str2 starts with str1, we reduce the problem by removing the prefix
    else if (str2.startsWith(str1)) {
        return gcdOfStrings(str1, str2.slice(str1.length));
    }

    // If neither string is a prefix of the other, there's no common divisor other than an empty string
    else {
        return '';
    }
}; 

// Testing for gcdOfStrings()
const testString1 = "ABCABC";
const testString2 = "ABC";
console.log(gcdOfStrings(testString1, testString2));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));