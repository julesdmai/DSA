/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Strategy: Stack with count
// O(n) // spaceO(n)
// Input: String, Number
// Output: String
var removeDuplicates = function(s, k) {
    const stack = []; // [['a', 1], ['b', 1], ...]

    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++; // Encountered same letter, increment count for that letter
        } else {
            stack.push([char, 1]); // Encountered a new letter
        }

        // If the count of the top element reached k, then we must pop it off
        if (stack[stack.length - 1][1] === k) {
            stack.pop();
        }
    }

    // End loop build the resulting string
    let result = '';
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;
};

// // testing
// console.log(removeDuplicates('abcd', 2))
// console.log(removeDuplicates('deeedbbcccbdaa', 3))
// console.log(removeDuplicates('pbbcggttciiippooaais', 2))