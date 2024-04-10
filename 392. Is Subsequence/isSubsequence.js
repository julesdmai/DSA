/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Questions: How long can strings s and t be? Hundreds? Millions? Can they be negative? Can they be 0? What happens when s is longer than t? Since this a string, can the chars be upper and lower case? 
// Strategy: 2 pointers
// O(n), Space-O(1)
var isSubsequence = function(s, t) {
    // Check edge cases
    if (s.length === 0) return true;
    if (t.length === 0) return false;

    // Initialize pointers
    let sPointer = 0, tPointer = 0;

    // Iterate over t
    while (tPointer < t.length && sPointer < s.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++; // Move to the next character in s
        }
        tPointer++; // Always move to the next character in t
    }

    if (sPointer === s.length) return true;
    if (tPointer === t.length) return false;
};


// Testing for isSubsequence()
const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));