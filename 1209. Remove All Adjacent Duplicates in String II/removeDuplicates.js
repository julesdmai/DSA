/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Strategy: Iterate through chars of s, push char onto stack, compare last k elements of stack, if fits criteria then pop k elements off, end loop join and return
// O(n) // spaceO(n)
// Input: String, Number
// Output: String
var removeDuplicates = function(s, k) {
    const stack = [];

    // Iterate through chars of s
    for (let char of s) {
        stack.push(char);

        // Compare last k elements of stack
        if (stack.length < k) continue;
        let topKStack = stack.slice(-k);
        if (checkDuplicates(topKStack)) {
            for (let i = 0; i < k; i++) {
                stack.pop();
            }
        }
    }
    // End loop, join and return
    return stack.join('');
};


// Helper function to check for duplicates within array
const checkDuplicates = (array) => {
    const letter = array[0];
    for (let char of array) {
        if (char !== letter) return false;
    }
    return true;
}

// // testing
// console.log(removeDuplicates('abcd', 2))
// console.log(removeDuplicates('deeedbbcccbdaa', 3))
// console.log(removeDuplicates('pbbcggttciiippooaais', 2))