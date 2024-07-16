/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Tokenize string, single stack to hold numbers, first pass to handle mult/div and second pass to handle add/sub
// O(n) // spaceO(n)
// Input: String
// Output: Number
var calculate = function(s) {
    const tokens = s.match(/\d+|\+|\-|\*|\//g); // Split into tokens of numbers and operators

    // Stack of numbers, state of last operation, and our current number
    const numbers = [];
    let lastOperation = '+';
    let currentNumber = 0;
    

    // First pass, handle multiplication and division immediately
    for (let i = 0; i <= tokens.length; i++) {
        let token = tokens[i];

        if (!isNaN(token)) { // This char represents a number
            currentNumber = Number(token);
        }
        
        if (isNaN(token) || i === tokens.length){ // This char represents a math operator
            if (lastOperation === '+') {
                numbers.push(currentNumber);
            } else if (lastOperation === '-') {
                numbers.push(-currentNumber);
            } else if (lastOperation === '*') {
                numbers.push(numbers.pop() * currentNumber)
            } else if (lastOperation === '/') {
                numbers.push(Math.trunc(numbers.pop() / currentNumber));
            }
            lastOperation = token;
            currentNumber = 0;
        }
    }

    // Second pass to handle addition and subtraction
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

// // testing
// console.log(calculate('3+2*2'))
// console.log(calculate('3/2 '))
// console.log(calculate(' 3+5 / 2 '))
// console.log(calculate(" 3/2 "))
// console.log(calculate("42"))
// console.log(calculate("1-1+1"))