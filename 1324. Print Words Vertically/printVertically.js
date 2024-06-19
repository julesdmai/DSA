/**
 * @param {string} s
 * @return {string[]}
 */
// Strategy: Split string into array of words, iterate through words, construct resulting array of words
// O(n) // spaceO(n)
// Input: String representing words
// Output: Array of strings representing words
var printVertically = function(s) {
    const results = [];
    // Split into array of words
    const words = s.split(' ');

    // Calculate max length of largest word
    const maxWordLength = maxLength(words);

    // Iterate through words
    for (let i = 0; i < words.length; i ++) {
        // Iterate through chars as many times as the max word length
        for (let j = 0; j < maxWordLength; j++) {
            let char = (words[i][j] || ' ');
            if (!results[j]) {
                results.push(char); // Construct resulting array of words
            } else {
                results[j] += char; // Concatenate this char
            }
        }
    }

    // Trim white space
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].trimEnd();
    }

    // Return
    return results;
};

// Helper function input an array of words return the length of longest word
const maxLength = (arrayOfWords) => {
    let maxLength = -Infinity;
    arrayOfWords.forEach((word) => {
        maxLength = Math.max(word.length, maxLength);
    })
    return maxLength
};

// Testing
console.log(printVertically('CONTEST IS COMING'));