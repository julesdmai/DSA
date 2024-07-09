/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Stack for keeping track, if current letter is less than top of stack, then pop off stack and increment deleteCount
// O(n) // spaceO(n)
// Input: String
// Output: Number representing minimum deletions
var minimumDeletions = function(s) {
    const stack = [];
    let deleteCount = 0;

    for (let char of s) {
        let topOfStack = stack[stack.length - 1];

        if (stack.length > 0 && char < topOfStack) { // balancing required
            stack.pop();
            deleteCount++;
        } else { // no balancing required
            stack.push(char);
        }
    }

    return deleteCount;
};

// // testing
// console.log(minimumDeletions('aababbab'))
// console.log(minimumDeletions('bbaaaaabb'));