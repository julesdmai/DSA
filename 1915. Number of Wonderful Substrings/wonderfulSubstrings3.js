/**
 * @param {string} word
 * @return {number}
 */

// Strategy: Sliding window
// O(n) // spaceO(1)
// Input: String
// Output: Number
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    const bitmaskCount = new Map();
    bitmaskCount.set(0, 1); // Initialize with 0 bitmask having one count

    let currentBitmask = 0;
    let wonderfulSubstringCount = 0;

    for (let char of word) {
        // Calculate the bitmask for the current character
        currentBitmask ^= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));

        // Add the current bitmask count to the wonderful substring count
        wonderfulSubstringCount += bitmaskCount.get(currentBitmask) || 0;

        // Check all bitmasks with one bit difference (for odd count cases)
        for (let i = 0; i < 10; i++) {
            let toggledBitmask = currentBitmask ^ (1 << i);
            wonderfulSubstringCount += bitmaskCount.get(toggledBitmask) || 0;
        }

        // Update the bitmask count map
        bitmaskCount.set(currentBitmask, (bitmaskCount.get(currentBitmask) || 0) + 1);
    }

    return wonderfulSubstringCount;
};

// // testing
// console.log(wonderfulSubstrings('aba'))
// console.log(wonderfulSubstrings('aabb'))
// console.log(wonderfulSubstrings('he'))