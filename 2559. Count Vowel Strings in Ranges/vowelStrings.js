/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

// Strategy: Create a map of the running total of words that starts and ends with a vowel
// O(n) // spaceO(n)
// Input: Array of strings, Array of array of numbers
// Output: Array of numbers representing the number of words that fit criteria
var vowelStrings = function(words, queries) {
    // Create a map of indices and running total
    const map = new Map();
    map.set(-1, 0);

    for (let i = 0; i < words.length; i++) {
        let prevCount = map.get(i - 1);
        if (checkStartEndForVowels(words[i])) map.set(i, prevCount + 1);
        else map.set(i, prevCount);
    }

    // Iterate through the queries
    const results = [];
    for (let query of queries) {
        // Use the map to find how many words in this range fit criteria and push to results
        let [leftIdx, rightIdx] = query;
        let numberOfWordsFitVowelsCriteria = map.get(rightIdx) - map.get(leftIdx - 1);
        results.push(numberOfWordsFitVowelsCriteria);
    }
    return results;
};

// Helper function to check beginning and end of word for vowels
const checkStartEndForVowels = (string) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const firstLetter = string[0];
    const lastLetter = string[string.length - 1];
    if (vowels.has(firstLetter) && vowels.has(lastLetter)) return true;
    else return false;
}

// testing
// console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); 
// console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); 