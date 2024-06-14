/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
// Strategy: Iterate through word of words, iterate through pattern, create hashmap to link letters, verify letters
// O(n^2) - n to iterate through, nested n to check for repeats // spaceO(n)
// Input: Array of array of strings representing words, string
// Output: Array of array of strings

// Helper function to check for duplicate values in object's values
const checkObjectDuplicateValues = (object) => {
    const values = Object.values(object);
    const set = new Set(values);
    if (values.length === set.size) {
        return false; // There are no duplicates, no elements were removed
    } else {
        return true; // There were duplicates, elements were removed to make the set
    }
}

// Helper function to check if a word matches the given pattern
const matchesPattern = (word, pattern) => {
    const map = new Map();
    const reverseMap = new Map();

    // Iterate through chars adding to map and verifying with reverseMap
    for (let i = 0; i < word.length; i++) {
        const wordChar = word[i];
        const patternChar = pattern[i];

        // If the pattern character is already mapped
        if (map.has(patternChar)) {
            if (map.get(patternChar) !== wordChar) return false;
        } else {
            // This pattern character has never been mapped

            // Check if the word character is already mapped to a different pattern character
            if (reverseMap.has(wordChar)) {
                if (reverseMap.get(wordChar) !== patternChar) return false;
            }

            // Create a new mapping
            map.set(patternChar, wordChar);
            reverseMap.set(wordChar, patternChar);
        }
    }

    // Reached the final iteration and this word's chars matches the pattern
    return true;
}

var findAndReplacePattern = function(words, pattern) {
    return words.filter(word => matchesPattern(word, pattern));
};

// console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));
// console.log(findAndReplacePattern(["abc"], "abb"));
// console.log(findAndReplacePattern(["mee"], "abb"));