/**
 * @param {string[]} strs
 * @return {string}
 */

// Strategy: Double nested loops, iterate through letters of first word, iterate through letters of all other words
var longestCommonPrefix = function(strs) {
    let result = '';

    // Iterate through letters of first word
    for (let i = 0; i < strs[0].length; i++) {
        let thisLetter = strs[0][i];

        // Iterate through words
        for (const word of strs) {
            // If letter in word does not match thisLetter
            if (word[i] !== thisLetter) {
                // Then return whatever result includes
                return result;
            }
        }
    
        // At the end of the loop, meaning all words have thisLetter, add thisLetter to the result string
        result += thisLetter;

        // Increment to the next letter in the first word
    }

    
    // If we have gotten through the letters of the first word, then this word is the longestCommonPrefix
    return result;
};

// // testing
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))