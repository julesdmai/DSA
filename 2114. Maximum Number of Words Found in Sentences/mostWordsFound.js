/**
 * @param {string[]} sentences
 * @return {number}
 */
// Input: Array of strings, where each element represents a sentence
// Output: Number representing number of words in sentence with most words
// O(n) // spaceO(1)
// Strategy: Iterate through array, split string into words, count number of words, keep record of max, return max
var mostWordsFound = function(sentences) {
    if (!sentences) return;
    let maxWords = 0;

    for (let sentence of sentences) {
        let words = sentence.split(' ');
        maxWords = Math.max(maxWords, words.length);
    }

    return maxWords;
};

// testing
// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
// console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))