/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Use stack, iterate over s, push open parens and pop from stack as encountered, calculate current depth and compare to max depth
// O(n) // spaceO(n)
// Input: String
// Output: Number representing max depth
var maxDepth = function(s) {
    const stack = [];
    let maxDepth = 0;
    let currentDepth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            currentDepth = stack.length;
            maxDepth = Math.max(currentDepth, maxDepth);
        } else if (s[i] === ')') {
            stack.pop();
            currentDepth = stack.length;
        } else {
            continue;
        }
    }

    return maxDepth;
}

// // testing
// console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
// console.log(maxDepth('(1)+((2))+(((3)))'));
// console.log(maxDepth('()(())((()()))'));
