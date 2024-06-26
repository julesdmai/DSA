/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

// Strategy: Create an array to keep track of running count of number of words tht fit criteria
// O(n) // spaceO(n)
// Input: Array of strings, Array of array of numbers
// Output: Array of numbers representing the number of words that fit criteria
var vowelStrings = function(words, queries) {
    // Create an array to keep track of running total
    const runningTotals = new Array(words.length + 1).fill(0);

    for (let i = 0; i < words.length; i++) {
        if (checkStartEndForVowels(words[i])) {
            runningTotals[i + 1] = runningTotals[i] + 1;
        } else {
            runningTotals[i + 1] = runningTotals[i];
        }
    }

    // Iterate through the queries
    const results = [];
    for (let query of queries) {
        let [leftIdx, rightIdx] = query;
        let numberOfWordsFitVowelsCriteria = runningTotals[rightIdx + 1] - runningTotals[leftIdx]
        results.push(numberOfWordsFitVowelsCriteria);
    }
    return results;
};

// Helper function to check beginning and end of word for vowels
const checkStartEndForVowels = (string) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return (vowels.has(string[0]) && vowels.has(string[string.length - 1]));
}

// // testing
// console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); 
// console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); 