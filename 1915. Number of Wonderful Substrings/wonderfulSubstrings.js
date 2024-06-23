/**
 * @param {string} word
 * @return {number}
 */

// Strategy: Helper function to check for isWonderful, take slices and check
// O(n!) // spaceO(n)
// Input: String
// Output: Number
var wonderfulSubstrings = function(word) {
    // Intialize count to the number of single chars we have
    let count = word.length;
    
        // Iterate through taking n chars starting from 2 (1 is already accounted for)
        for (let n = 2; n <= word.length; n++) {

            // Itereate through the string, checking if slice isWonderful
            for (let i = 0; i <= word.length - n; i++) {
                let slice = word.slice(i, i + n);
                if (isWonderful(slice)) count++;
            }   
        }

    // End of loop
    return count;
};

// Helper function to determine if a given string is "wonderful"
const isWonderful = (string) => {
    const frequencyMap = {};
    for (let char of string) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    const frequencies = Object.values(frequencyMap);
    const oddFrequencies = frequencies.filter((element) => {
        if (element % 2 !== 0) return true; 
    });
    return (oddFrequencies.length <= 1);
}


// // testing
// console.log(wonderfulSubstrings('aba'))
// console.log(wonderfulSubstrings('aabb'))
// console.log(wonderfulSubstrings('he'))