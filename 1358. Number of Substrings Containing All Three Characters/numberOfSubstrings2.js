/**
 * @param {string} s
 * @return {number}
 */


// Strategy: Two pointers
// O(n) // spaceO(1)
// Input: String
// Output: Number
var numberOfSubstrings = function(s) {
    // Edge case, if string s is too short, then we cannot find chars 'a', 'b', and 'c'
    if (s.length < 3) return 0;

    // Initialize valid window
    const chars = ['a', 'b', 'c'];
    const indicesABC = [];
    for (let char of chars) {
        let idx = s.indexOf(char);
        if (idx === -1) return 0; // short-circuit if all elements could not be found
        indicesABC.push(idx);
    }
    let leftIdx = Math.min(...indicesABC);
    let rightIdx = Math.max(...indicesABC);

    let counter = 0;
    // Iterate through initialized valid window
    while (leftIdx <= s.length - 3) {
        let slice = s.slice(leftIdx, rightIdx + 1);

        // If this is a valid window
        if (slice.includes('a') && slice.includes('b') && slice.includes('c')) {
            counter += s.length - rightIdx; // Account for all of the substrings that include this valid window
            leftIdx++; // Move the left pointer
        }

        // Else move the right pointer
        else {
            // If within bounds, move the right pointer
            if (rightIdx < s.length - 1) rightIdx++
            // Else moving will put out of bounds, so we return counter immediately
            else break;
        }
    }

    // End of loop, return counter
    return counter;
    
};

// // testing
console.log(numberOfSubstrings('abc'))
console.log(numberOfSubstrings("abcabc"))
console.log(numberOfSubstrings("aaacb"))