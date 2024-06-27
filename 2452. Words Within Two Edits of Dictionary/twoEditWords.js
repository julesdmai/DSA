/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */

// Strategy: iterate through queries, iterate through dictionary, compare word to dictionaryWord using helper function, return results
// O(n^2) // spaceO(1)
// Input: Array of strings, array of strings
// Output: Array of strings
var twoEditWords = function(queries, dictionary) {
    const results = [];

    // Helper function to count the differences between two words
    const countDifferences = (word1, word2) => {
        let differences = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) differences++;
        }
        return differences;
    }

    // Itereate through queries
    for (let word of queries) {
        for (let dicitionaryWord of dictionary) {
            // Check word against each dicitionary word
            if (countDifferences(word, dicitionaryWord) <= 2) {
                results.push(word);
                break; // Do not check any more dictionary words, proceed with iteration
            }
        }
    }
    return results;
};

// // testing
// console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]));
// console.log(twoEditWords(["yes"], ["not"]));