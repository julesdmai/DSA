/**
 * @param {string} word
 * @return {number}
 */

// Strategy: Create frequencyMap, sort by frequency DESC, process array, return results
// O(n) // spaceO(n)
// Input: String
// Output: Number
var minimumPushes = function(word) {
    // Create frequencyMap
    const frequencyMap = {};
    for (let char of word) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Sort by frequency DESC
    const frequencies = Object.values(frequencyMap).sort((a, b) => b - a);

    // Iterate through frequencies, first group 8 * 1, second group 8 * 2, third group... etc
    const process = (array) => {
        let buttonPushes = 0;
        let multiplier = 0;
        let index = 0;
        while (index < array.length) {
            if (index % 8 === 0) multiplier++;
            buttonPushes += array[index] * multiplier;
            index++;
        }
        
        return buttonPushes;
    }
    return process(frequencies);
};

// testing
// console.log(minimumPushes("abcde"));
// console.log(minimumPushes("xyzxyzxyzxyz"));
// console.log(minimumPushes("aabbccddeeffgghhiiiiii"));