
    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Questions: 
// How long can strings s and t be? Hundreds? Millions? 
// Can they be negative? Can they be 0? 
// What happens when s is longer than t? 
// Since this a string, can the chars be upper and lower case? 
// Strategy: Recursion
// O(n), Space-O(1)

var isSubsequence = function(s, t) {
    // Base case
    if (s.length === 0) return true;
    if (t.length === 0) return false;

    // Recursive case
    if (s[0] === t[0]) {
        return isSubsequence(s.slice(1), t.slice(1));
    } else {
        return isSubsequence(s, t.slice(1));
    }
};

// Testing for isSubsequence()
const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));