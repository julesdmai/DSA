/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */

// Strategy: Use a stack, if top of stack matches part, then pop off x 3
// O(n) // spaceO(n)
// Input: String, string representing pattern
// Output: Modified string
var removeOccurrences = function(s, part) {
    const stack = [];
    let partLength = part.length;

    for (let char of s) {
        stack.push(char);

        // Check if top of stack matches part
        if (stack.length >= partLength) {
            let topStack = stack.slice(stack.length - partLength).join('');
            // Matches, remove the top elements
            if (topStack === part) {
                for (let i = 0; i < topStack.length; i++) {
                    stack.pop();
                }
            }
        }
    }

    return stack.join('');
};

// // testing
console.log(removeOccurrences("daabcbaabcbc", "abc"));