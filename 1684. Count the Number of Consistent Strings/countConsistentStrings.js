/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// Input: string of distinct chars
// Output: array of strings representing words
// O(n) // spaceO(1)
// Strategy: Iterate through words, iterate through chars, increment counter if satisfies requirement
var countConsistentStrings = function(allowed, words) {
    if (!allowed || !words) return 0; // Account for edge case

    let numConsistentWords = 0; // Counter we will be incrementing

    for (const word of words) {
        let idx = 0;
        for (const letter of word) {
            if (!allowed.includes(letter)) {
                break;
            }
            else idx++;
        }
        if (idx === word.length) numConsistentWords++; // Completed the end of the loop
    }

    return numConsistentWords;
};

// testing
// console.log(countConsistentStrings('', []));
// console.log(countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"])); // 2
// console.log(countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"])); // 7
// console.log(countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"])); // 4
