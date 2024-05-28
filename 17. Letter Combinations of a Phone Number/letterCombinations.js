/**
 * @param {string} digits
 * @return {string[]}
 */

// Input: String representing phone number digits
// Output: Array of strings representing the possible letter combinations

// Iterative or recursive
// Iteration first

// O(2^n) // Space O(1)
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const dialNumber = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
        0: ' '
    };

    const combinations = []; // To store the final combinations

    // DFS helper function to generate combinations
    const dfs = (index, path) => {
        // Base case, if we have reached past the letters in the digits array, then we push the combinations we have accumulated or "paths" to eventually return
        if (index === digits.length) {
            combinations.push(path);
            return;
        }

        // Get the letters that correspond to the current digit
        const possibleLetters = dialNumber[digits[index]];
        // Recursively call for each possible letter
        for (const letter of possibleLetters) {
            // Advance the index with new memory - branching out until we hit base case
            dfs(index + 1, path + letter);
        }
    }

    dfs(0, '');
    return combinations;
};

// Examples to test the function
console.log(letterCombinations("23"));  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations(""));    // Output: []
// console.log(letterCombinations("2"));   // Output: ["a","b","c"]