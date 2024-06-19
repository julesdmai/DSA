/**
 * @param {string} s
 * @return {string[]}
 */
// Strategy: Split string into array of words, find maxWordLength, iterate through maxWordlength, iterate through words
// O(n) // spaceO(n)
// Input: String representing words
// Output: Array of strings representing words
var printVertically = function(s) {
    const words = s.split(' ');
    const maxWordLength = Math.max(... words.map((word) => word.length));
    const results = new Array(maxWordLength).fill('');
    
    // Iterate maxWordLength times
    for (let i = 0; i < maxWordLength; i++) {
        // Now we iterate over the words
        for (let word of words) {
            results[i] += (word[i] || ' ');
        }
    }

    // Trim trailing whitespace
    return results.map(word => word.trimEnd());
};

// // Testing
// console.log(printVertically('CONTEST IS COMING'));