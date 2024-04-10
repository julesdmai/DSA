
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

    // Keep track of position in s
    let sIndex = 0;

    // Iterate through string t
    for (let tChar of t) {
        if (s[sIndex] === tChar) {
            sIndex++; // Found a match, move to the next char
            if (sIndex === s.length) return true;
        }
    }

    // End of loop, default false
    return false;
};

// Testing for isSubsequence()
const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));