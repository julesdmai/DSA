/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numberStack = [];
    let stringStack = [];
    let currentString = '';
    let currentNumber = 0;

    for (let char of s) {
        if (/^[0-9]$/.test(char)) {
            // Shift the digits
            currentNumber = currentNumber * 10 + parseInt(char); 
        } else if (char === '[') {
            // Push current string and number to their respective stacks
            stringStack.push(currentString);
            numberStack.push(currentNumber);

            // Reset
            currentString = '';
            currentNumber = 0;

        } else if (char === ']') {
            // Pop the last number and string
            let num = numberStack.pop();
            let prevString = stringStack.pop();

            currentString = prevString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
};

// // testing
// console.log(decodeString("3[a]2[bc]")) // Output: "aaabcbc"
// console.log(decodeString("3[a2[c]]")) // Output: "accaccacc
// console.log(decodeString("2[abc]3[cd]ef")) // Output: "abcabccdcdcdef"