/**
 * @param {string} word
 * @return {string}
 */

// Strategy: Variables to store state of letter and count, iterate through string, construct return string
// O(n) // spaceO(1)
// Input: String
// Output: Stirng
var compressedString = function(word) {
    let comp = '';
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let count = 0;
        
        // Count up to 9 occurrences of the current character
        while (i < word.length && word[i] === char && count < 9) {
            count++;
            i++;
        }
        
        // Append the count and character to the compressed string
        comp += count + char;
    }
    
    return comp;
};

// testing
// console.log(compressedString("abcde"))
// console.log(compressedString("aaaaaaaaaaaaaabb"))