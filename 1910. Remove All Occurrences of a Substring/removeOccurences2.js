/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */

// Strategy: Use method .includes() to match pattern, then use method .replace() to delete the substring
// O(n^2) // spaceO(1)
// Input: String, string representing pattern
// Output: Modified string
var removeOccurrences = function(s, part) {
    while (s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
};

// // testing
// console.log(removeOccurrences("daabcbaabcbc", "abc"));