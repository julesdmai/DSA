/**
 * @param {string} s
 * @return {number}
 */
// Input: String
// Output: A single number representing the accumulated value
// O(n) // spaceO(1)
// Strategy: Reduce method to accumulate a single value // OR sumOfDiffs variable and loop through string
var scoreOfString = function(s) {
    if (!s) return;

    let sumOfDiffs = 0;
    for (let i = 0; i < s.length - 1; i++) { // stop loop one iteration before
        let firstIdx = i;
        let neighborIdx = i + 1;
        let neighborDiff = Math.abs(s.charCodeAt(firstIdx) - s.charCodeAt(neighborIdx));
        sumOfDiffs += neighborDiff;
    }
    return sumOfDiffs;
};

// // testing
// console.log(scoreOfString("")) // undefined
// console.log(scoreOfString("hello")) // 13
// console.log(scoreOfString("zaz")) // 50