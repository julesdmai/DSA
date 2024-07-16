/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Regex for tokenization, two stacks to hold numbers and operations, first pass to handle mult/div and second pass to handle add/sub
// O(n) // spaceO(n)
// Input: String
// Output: Number
var calculate = function(s) {
    const mathOperations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b) // Prompt - The integer division should truncate toward zero.
    }

    const tokens = s.match(/\d+|\+|\-|\*|\//g);

    // 2 stacks and state of last operation
    const numbers = [];
    const operations = [];
    let lastOperation = null;
    

    // First pass, handle multiplication and division immediately
    for (let token of tokens) {
        if (token === ' ') { // Ignore white space
            continue;
        } else if (/\d+/.test(token)) { // This char represents a number
            numbers.push(Number(token));

            if (lastOperation === '*' || lastOperation === '/') {
                let secondNumber = numbers.pop();
                let firstNumber = numbers.pop();
                let operator = operations.pop();
                
                let product = mathOperations[operator](firstNumber, secondNumber);
                numbers.push(product);
            }
        } else { // This char represents a math operator
            lastOperation = token;
            operations.push(token);
        }
    }

    // Second pass to handle addition and subtraction
    // Iterate through operations converting '-' to negative numbers
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '-') {
            numbers[i + 1] *= -1;
        }
    }
    
    // Sum up all numbers
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

// // testing
// console.log(calculate('3+2*2'))
// console.log(calculate('3/2 '))
// console.log(calculate(' 3+5 / 2 '))
// console.log(calculate(" 3/2 "))
// console.log(calculate("42"))
// console.log(calculate("1-1+1"))