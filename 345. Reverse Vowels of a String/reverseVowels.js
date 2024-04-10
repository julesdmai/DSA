/**
 * @param {string} s
 * @return {string}
 */

// O(n^2)
// s = 'hello'
var reverseVowels = function(s) {
    // Check edge cases

    let returnString = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsFound = [];

    // Strategy - scan twice
    // First scan notes down positions of the vowels
    // Second scan constructs the returned string

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelsFound.push(s[i]);
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (vowels.includes(s[j].toLowerCase())) {
            returnString += vowelsFound.pop();
        }
        else {
            returnString += s[j];
        }
    }

    return returnString;

};