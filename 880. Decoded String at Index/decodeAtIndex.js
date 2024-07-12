/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Strategy: Two passes, first pass to calculate size of the the decoded string, second pass to work backwards to find the k-th index character
// O(n) // spaceO(1)
// Input: String, Number
// Output: String (char)
var decodeAtIndex = function(s, k) {
    // First pass to calculate final length of the decoded string
    let length = 0;
    let i = 0;
    while (length < k) {
        let thisChar = s[i];
        if (isDigit(thisChar)) {
            length *= Number(thisChar);
        } else {
            length++;
        }
        i++;
    } // Exit the loop once we have sufficient length

    // Second pass to work backwards to find k-th index char
    for (let j = i - 1; j >= 0; j--) {
        let thisChar = s[j];
        if (isDigit(thisChar)) {
            length = length / Number(thisChar);
            k %= length;
        } else {
            if (k === 0 || k === length) { // k = length, therefore we return 'o'
                return thisChar;
            }
            length--;
        }
    }

    return '';
};

// Helper function to check if char represents a digit
const isDigit = (char) => {
    return /^[0-9]$/.test(char);
}

// // testing
// console.log(decodeAtIndex('leet2code3', 10));
// console.log(decodeAtIndex('ha22', 5));
// console.log(decodeAtIndex('a2345678999999999999999', 1));