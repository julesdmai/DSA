/*
Valid Parentheses
Prompt:
Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Example:

Input: "()" 
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false


*/

const validParens = (s) => {
    const complementPair = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let thisChar = s[i];
        if (!complementPair[thisChar]) {
            stack.push(thisChar); // This is a opening parens
        } else if (complementPair[thisChar]) {
            // This is a closing parens // Check for validity
            let topStack = stack.pop();
            if (topStack !== complementPair[thisChar]) {
                return false;
            }
        }
    }

    // At the end of the loop, all closing Parens have been matched
    return (stack.length === 0)
}