/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Strategy: Construct a new string, iterate through s, check if newString length >= k, if char then concat, if number then repeat
// O(n) // spaceO(n)
// Input: String, Number
// Output: String (char)
var decodeAtIndex = function(s, k) {
    let newString = '';
    for (let char of s) {
        if (newString.length >= k) {
            break; // Short circuit if possible
        }
        // Check for char
        const regexChar = /^[a-z]$/;
        if (regexChar.test(char)) {
            newString = newString.concat(char);
        }

        // Check for digit
        const regexDigit = /^[0-9]$/;
        if (regexDigit.test(char)) {
            let numberOfRepeat = Number(char);
            newString = newString.repeat(numberOfRepeat);
        }
    }
    // End loop, check for decodeAtIndex
    if (newString.length >= k) {
        return newString[k - 1];
    } else {
        return null;
    }
};

// // testing
// console.log(decodeAtIndex('leet2code3', 10));
// console.log(decodeAtIndex('ha22', 5));
// console.log(decodeAtIndex('a2345678999999999999999', 1));