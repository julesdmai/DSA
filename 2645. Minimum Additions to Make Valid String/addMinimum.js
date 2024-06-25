/**
 * @param {string} word
 * @return {number}
 */
// Strategy: Iterate through word, count necessary insertions, handle remaining sequence
// O(n) // spaceO(1)
// Input: String
// Output: Number
var addMinimum = function(word) {
    let result = 0;
    let i = 0;
    let expectedChar = 'a';

    for (let char of word) {
        while (char !== expectedChar) {
            result++;
            expectedChar = nextChar(expectedChar);
        }
        expectedChar = nextChar(expectedChar);
    }

    // Account for any missing characters at the end
    while (expectedChar !== 'a') {
        result++;
        expectedChar = nextChar(expectedChar);
    }

    return result;
};

// Helper function to get the next character in "abc" sequence
function nextChar(char) {
    if (char === 'a') return 'b';
    if (char === 'b') return 'c';
    if (char === 'c') return 'a';
}

// // Testing
// console.log(addMinimum('a')); // Output: 2
// console.log(addMinimum('aaa')); // Output: 6
// console.log(addMinimum('abc')); // Output: 0
// console.log(addMinimum('aaaabb')); // Output: 9
