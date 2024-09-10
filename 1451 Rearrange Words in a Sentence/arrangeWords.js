/**
 * @param {string} text
 * @return {string}
 */

// Strategy: Lowercase first word, split into elements in array, order by increasing length, capitalize first word, join and return
// O(nlogn) // spaceO(n)
// Input: String
// Output: String
var arrangeWords = function(text) {
    if (!text.length) return text;

    // Lowercase first word
    const lowerCaseFirstLetter = text[0].toLowerCase();
    console.log(lowerCaseFirstLetter); // 'k'
    const newText = lowerCaseFirstLetter + text.slice(1);
    console.log(newText);

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