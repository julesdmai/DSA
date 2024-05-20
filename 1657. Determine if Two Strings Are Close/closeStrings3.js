/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // If the lengths are not equal, they can't be close.
    if (word1.length !== word2.length) return false;

    // Create histograms for both words.
    const histogram1 = {};
    const histogram2 = {};
    
    for (let char of word1) {
        histogram1[char] = (histogram1[char] || 0) + 1;
    }

    for (let char of word2) {
        histogram2[char] = (histogram2[char] || 0) + 1;
    }

    // Extract and sort keys (unique characters) from both histograms.
    const sortedKeys1 = Object.keys(histogram1).sort();
    const sortedKeys2 = Object.keys(histogram2).sort();

    // If the sets of unique characters don't match, return false.
    if (sortedKeys1.length !== sortedKeys2.length) return false;
    for (let i = 0; i < sortedKeys1.length; i++) {
        if (sortedKeys1[i] !== sortedKeys2[i]) return false;
    }

    // Extract and sort values (frequencies) from both histograms.
    const sortedValues1 = Object.values(histogram1).sort((a, b) => a - b);
    const sortedValues2 = Object.values(histogram2).sort((a, b) => a - b);

    // Check if the sorted frequency arrays are equal.
    if (sortedValues1.length !== sortedValues2.length) return false;
    for (let i = 0; i < sortedValues1.length; i++) {
        if (sortedValues1[i] !== sortedValues2[i]) return false;
    }
    return true;
};

// Example usage:
console.log(closeStrings("abc", "bca")); // Output: true
console.log(closeStrings("a", "aa")); // Output: false
console.log(closeStrings("cabbba", "abbccc")); // Output: true
