/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Two counters for countA and minDeletions, iterate through the string, deal with encountering 'a' and 'b', update minDeletions
// O(n) // spaceO(1)
// Input: String
// Output: Number representing minimum deletions
var minimumDeletions = function(s) {
    let countA = 0;
    let minDeletions = 0;

    for (let char of s) {
        if (char === 'a') countA++;
        else { // encountered a 'b'
            minDeletions = Math.min(minDeletions + 1, countA);
        }
    }

    return minDeletions;
};

// // testing
// console.log(minimumDeletions('aababbab'))