/**
 * @param {string} s
 * @return {string}
 */
// Input: String
// Output: String
// O(n) // spaceO(n)
var reverseVowels = function(s) {
    if (!s) return;

    const VOWELS = [
        'a', 'e', 'i', 'o', 'u',
        'A', 'E', 'I', 'O', 'U'
    ]

    const results = [];
    const vowelsFound = [];
    
    for (let char of s) {
        if (VOWELS.includes(char)) vowelsFound.push(char);
    }
    
    for (let char of s) {
        if (VOWELS.includes(char)) {
            results.push(vowelsFound.pop());
        } else {
            results.push(char);
        }
    }

    return results.join('');
};

// testing
// console.log(reverseVowels("IceCreAm")) // "AceCreIm"