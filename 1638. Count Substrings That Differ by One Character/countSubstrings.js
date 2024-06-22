/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// Strategy: Iterate over each char in s and t, compare substrings starting from this postion, count differences, continnue until more than one difference is found
// O(n^2) // spaceO(1)
// Input: String
// Output: Number
var countSubstrings = function(s, t) {
    let count = 0;

    // Iterate over all possible starting positions in s
    for (let i = 0; i < s.length; i ++) {

        // Iterate over all possible starting positions in t
        for (let j = 0; j < t.length; j++) {
            let differences = 0;

            // Compare substrings starting from i in s and j in t
            for (let k = 0; i + k < s.length && j + k < t.length; k++) {
                if (s[i + k] !== t[j + k]) {
                    differences++;
                }
                // If there is exactly one difference, increment count
                if (differences === 1) {
                    count ++;
                }
                // Else if more than one ifference, break out of loop
                else if (differences > 1) {
                    break;
                }
            }
        }   
    }
    return  count;
};

// testing
console.log(countSubstrings('aba', 'baba'));