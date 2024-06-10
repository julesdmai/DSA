/*
Description:

Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example: 
s = "()" -> true
s = "()[]{}" -> true
s = "(]" -> false
s = "([)]" -> false
s = "{[]}" -> true
*/

// Strategy: Use a stack (LIFO) to validate correct closing sign
// O(n), spaceO(n)
// Input: string
// Output: boolean

const validParentheses = (s) => {

    const stack = [];

    // Makes it a little easier to add and validate from the stack
    const closingPair = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    // Iterate through // When does it equate to false? // ex. "([)]"
    for (char of s) {
        if (!closingPair[char]) {
            // This char is an opening pair, push it on to the stack
            stack.push(char);
        } else {
            // This char is a closing pair, compare it to the top of the stack
            const topStack = stack.pop();
            if (topStack !== closingPair[char]) {
                return false; // If top of stack (last opening char) is not the expected closing pair, return false
            }
        }
    }

    // At the end, all signs had correct closing, therefore we return true
    return true;
}

// // // testing
// console.log(validParentheses('()')); 
// console.log(validParentheses('()[]{}')); 
// console.log(validParentheses('(]')); 
// console.log(validParentheses('([)]')); 
// console.log(validParentheses('{[]}')); 