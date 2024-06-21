/**
 * @param {string} s
 * @return {string}
 */

// Strategy: FrequencyMap, sort entries by frequency, construct new string
// O(n) // spaceO(n)
// Input: String
// Output: String
var frequencySort = function(s) {
    const frequencyMap = {};
    for (let char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1
    }

    // Sort entries by frequency
    const entries = Object.entries(frequencyMap);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

    // Construct new string
    let sortedString = '';
    for (let entry of sortedEntries) {
        const [ letter, frequency ] = entry;
        sortedString += letter.repeat(frequency);
    }
    return sortedString;
};

// // testing
// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));