/**
 * @param {string} s
 * @return {string}
 */

// Strategy: Stack to accumulate  characters and reverse when we encunter closing parens ')', pop off elements into temp until we hit '(', convert to a string
// O(n) // spaceO(n)
// Input: String
// Output: String
var reverseParentheses = function(s) {
    const stack = [];

    for (let char of s) {
        if (char === ')') {
            // Pop from stack until opening parens '(' is found
            let temp = [];
            while (stack.length && stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }

            // Pop the '(' from the stack
            stack.pop();

            // Push the reversed substring back onto the stack
            for (let t of temp) {
                stack.push(t);
            }
        } else {
            // Push all characters and opening parens '(' into the stack
            stack.push(char);
        }
    }

    // Convert stack to stirng
    return stack.join('');
};

// // testing
// console.log(reverseParentheses("(abcd)"));
// console.log(reverseParentheses("(u(love)i)"));
// console.log(reverseParentheses("(ed(et(oc))el)"));
// console.log(reverseParentheses("ta()usw((((a))))"));