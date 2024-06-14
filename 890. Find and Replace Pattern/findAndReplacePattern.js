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

// example: ['mee'], pattern = 'abb'
var findAndReplacePattern = function(words, pattern) {
    const results = [];

    // Iterate through each word of words
    for (const word of words) {
        const charMap = {};

        // Itereate through each char of the pattern
        let i = 0;
        while (i < pattern.length) { // Implement as a while loop so we can break out
            let patternLetter = pattern[i];
            console.log(patternLetter);

            // If this letter of the pattern has never been encountered,
            if (!charMap[patternLetter]) {
                // Then add this patternLetter to the map with it's corresponding associated word letter
                charMap[patternLetter] = word[i]; // {'a': 'm' }
                
                // After adding to map, we need to check for repeats pointing to same letter
                if (checkObjectDuplicateValues(charMap) === true) break;
            }

            // Validate that word[i] is what we expect
            let correspondingLetter = charMap[patternLetter];
            if (word[i] !== correspondingLetter) {
                break;
            }
            i++; // Increment
        }

        // At the end, if i has been incremented to the end, then all checks pass meaning we add this to results
        if (i === pattern.length) {
            results.push(word);
        }
    }

    // At the end of iteratino of all words, we return the words that satisfy the condition
    return results;
};

// console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));
// console.log(findAndReplacePattern(["abc"], "abb"));
// console.log(findAndReplacePattern(["mee"], "abb"));