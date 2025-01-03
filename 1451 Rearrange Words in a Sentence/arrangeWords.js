/**
 * @param {string} text
 * @return {string}
 */

// Strategy: Lowercase first word, split into elements in array, order by increasing length, capitalize first word, join and return, NOTE strings are immutable!
// O(nlogn) for sorting // spaceO(n)
// Input: String
// Output: String
var arrangeWords = function(text) {
    // Create new copy of text replacing first char with lowercase
    const lowerCaseFirstLetter = text[0].toLowerCase();
    const newText = lowerCaseFirstLetter + text.slice(1);

    // Split words into array and re-order by increasing length
    const tokens = newText.split(' ');
    tokens.sort((a, b) => a.length - b.length);

    // Copy string and replace first letter of first word with uppercase
    const capitalFirstLetter = tokens[0][0].toUpperCase();
    tokens[0] = capitalFirstLetter + tokens[0].slice(1);

    // Join words and return string
    const results = tokens.join(' ');
    return results;
};

// // testing
// console.log(arrangeWords("Keep calm and code on"));