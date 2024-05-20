/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// Helper function to compare two arrays
function equalArray(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

// Helper function obtain keys, sorted
const extractSortedKeys = (object) => {
    const keys = Object.keys(object);
    return keys.sort();
}

// Helper function obtain values, sorted
const extractSortedValues = (object) => {
    const values = Object.values(object);
    return values.sort((a, b) => a - b);
}

// We are trying to figure out the letters of each word and the frequency of each letter
var closeStrings = function(word1, word2) {
    // Create histograms for words
    const wordHistogram1 = {}
    for (letter of word1) {
        (!wordHistogram1[letter]) ? wordHistogram1[letter] = 1 : wordHistogram1[letter]++;
    }

    const wordHistogram2 = {}
    for (letter of word2) {
        (!wordHistogram2[letter]) ? wordHistogram2[letter] = 1 : wordHistogram2[letter]++;
    }
    
    // Compare the letters we have available
    const letters1 = extractSortedKeys(wordHistogram1);
    const letters2 = extractSortedKeys(wordHistogram2)
    if (!equalArray(letters1, letters2)) return false; // If do not match, return false

    // Compare the numbers (frequency of letters) we have available
    const frequency1 = extractSortedValues(wordHistogram1);
    const frequency2 = extractSortedValues(wordHistogram2);
    if (!equalArray(frequency1, frequency2)) return false; // If do not match, return false

    return true;
};