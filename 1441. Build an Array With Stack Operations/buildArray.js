/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// Strategy: Loop up to n, push to stackOps 'push' and 'pop' as necessary to match target, end loop return stackOps
// O(n) // spaceO(n)
// Input: Array of numbers representing target, and number
// Output: Array of strings representing stack operations
var buildArray = function(target, n) {
    let indexTarget = 0;
    const stackOps = [];

    // Loop up to n
    for (let i = 1; i <= n; i++) {
        stackOps.push('Push'); // Always push the current integer

        // Check for finish criteria
        if (i === target[target.length - 1]) {
            break;
        }
        if (target[indexTarget] === i) {
            indexTarget++; // If the current integer is correct, we move on
        } else {
            stackOps.push('Pop'); // Else we must pop this incorrect integer off
        }
    }

    // End loop return stackOps
    return stackOps;
};

// // testing
// console.log(buildArray([1,3], 3))