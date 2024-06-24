/**
 * @param {string} word
 * @return {string}
 */

// Strategy: Variables to store state of letter and count, iterate through string, construct return string
// O(n) // spaceO(1)
// Input: String
// Output: Stirng
var compressedString = function(word) {
    // Initailize variables
    let comp = '';
    let targetLetter = word[0];
    let targetCount = 0;
    
    // Iterate through the string
    for (let char of word) {
        // If this is a new letter or we have already recorded 9 count, then compress the previous letter
        if (char !== targetLetter || targetCount === 9) {
            comp += `${targetCount}${targetLetter}`

            // Reassign and reset
            targetLetter = char;
            targetCount = 1;
         } 
         
         else {
            targetCount++ // Account for this char
         }
    }

    // Add the last letter if unaccounted for
    if (targetCount > 0) {
        comp += `${targetCount}${targetLetter}`;
    }

    // Return the compressed string
    return comp;
};

// testing
// console.log(compressedString("abcde"))
// console.log(compressedString("aaaaaaaaaaaaaabb"))