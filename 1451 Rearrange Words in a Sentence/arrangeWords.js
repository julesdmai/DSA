/**
 * @param {string} text
 * @return {string}
 */

// Strategy: Lowercase first word, split into elements in array, order by increasing length, capitalize first word, join and return, NOTE strings are immutable!
// O(nlogn) for sorting // spaceO(n)
// Input: String
// Output: String
var arrangeWords = function(text) {
    if (!text.length) return 'no text';

    // Lowercase first word
    const lowerCaseFirstLetter = text[0].toLowerCase();
    const newText = lowerCaseFirstLetter + text.slice(1);

    // Split words into array
    const tokens = newText.split(' ');

    // Re-order by increasing length
    tokens.sort((a, b) => a.length - b.length);

    // Capitalize first letter
    const capitalFirstLetter = tokens[0][0].toUpperCase();
    tokens[0] = capitalFirstLetter + tokens[0].slice(1);

    // Join and return string
    return tokens.join(' ');
};

// // testing
// console.log(arrangeWords("Keep calm and code on"));