/** 
Problem Description:
You are given an array of numbers and strings representing mathematical operators. The goal is to evaluate the array as if it were a mathematical expression, respecting the order of operations (multiplication and division before addition and subtraction).

Example:
Given the input array:
[4, "/", 2, "+", 7, "-", 1]

The function should evaluate this as 4 / 2 + 7 - 1 and return the result 8.
**/

const arrayMath = function (arr) {
    const operators = {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
  
    const performOperation = (operator) => {
      let index = arr.indexOf(operator);
      while (index !== -1) {
        const firstNum = arr[index - 1];
        const secondNum = arr[index + 1];
        // Delete 3 elements starting from (index - 1), insert in place result of operation
        arr.splice(index - 1, 3, operators[operator](firstNum, secondNum)); 
        index = arr.indexOf(operator); // Continue the loop to the next instance of this operator
      }
    };
  
    // Explicitly define the correct order of operations
    const possibleOperators = ['*', '/', '+', '-']
    possibleOperators.forEach((operator) => performOperation(operator));
  
    return arr[0];
  };
  
  console.log(arrayMath([4, "/", 2, "+", 7, "-", 1]));