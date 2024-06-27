/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */

// Strategy: iterate through queries, iterate through dictionary, compare word to dictionaryWord, return results
// O(n^2) // spaceO(1)
// Input: Array of strings, array of strings
// Output: Array of strings
var twoEditWords = function(queries, dictionary) {
    const results = [];
    // Iterate through queries
    for (let word of queries) {
        // Iterate through dictionary
        let minDiffCount = Infinity; // minDiffCount is wiped for each word of queries
        for (let dictionaryWord of dictionary) {
            // Compare word to dictionaryWord
            let diffCount = 0; // diffCount is wiped for each dictionaryWord
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== dictionaryWord[i]) diffCount++;
            }
            minDiffCount = Math.min(diffCount, minDiffCount); // Reassign minDiffCount to be the min value
        }
        // End of loop, check minDiffCount
        if (minDiffCount <= 2) results.push(word);
    }
    // Return results
    return results;
};

// testing
console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]));
console.log(twoEditWords(["yes"], ["not"]));