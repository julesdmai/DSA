/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// Slice 'n splice
// O(n)
// Input: String, String
// Output: Merged String
var mergeAlternately = function (word1, word2) {
    // Check edge cases
    // Initialize returnString
    let returnString = '';

    // Iterate endlessly
    for (let i = 0; i < Infinity; i++) {
        if (word1[i]) returnString += word1.slice(i, i + 1);
        if (word2[i]) returnString += word2.slice(i, i + 1);
        if (!word1[i] && !word2[i]) break;
    }

    // Return returnString
    return returnString;
};

// Testing for mergeAlternately()
const testString1 = 'abc';
const testString2 = 'xyz';
console.log(mergeAlternately(testString1, testString2));