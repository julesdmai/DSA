/**
 * @param {string} word
 * @return {number}
 */

// Strategy: Sliding window
// O(n^3) // spaceO(n)
// Input: String
// Output: Number
var wonderfulSubstrings = function(word) {
    let count = 0;
    
    // Itereate through subsequences creating frequency map
    for (let start = 0; start < word.length; start++) {
        const frequencyMap = {};
        for (let end = start; end < word.length; end++) {
            frequencyMap[word[end]] = (frequencyMap[word[end]] || 0) + 1;
            if (isWonderful(Object.values(frequencyMap))) {
                count++;
            }
        }
    }

    // End of loop
    return count;

};

// Helper function to determine if frequencies is "wonderful"
const isWonderful = (array) => {
    let oddCount = 0;

    // Runs a maximum of O(10) times for chars a-j, reducing to O(1)
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) oddCount++;
        if (oddCount > 1) break;
    }

    return (oddCount <= 1);
}


// // testing
// console.log(wonderfulSubstrings('aba'))
// console.log(wonderfulSubstrings('aabb'))
// console.log(wonderfulSubstrings('he'))