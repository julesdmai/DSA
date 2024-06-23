/**
 * @param {string} s
 * @return {number}
 */


// Strategy: Two pointers with hashmap
// O(n) // spaceO(1)
// Input: String
// Output: Number
var numberOfSubstrings = function(s) {
    // Edge case, if string s is too short, then we cannot find chars 'a', 'b', and 'c'
    if (s.length < 3) return 0;

    let leftIdx = 0;
    let rightIdx = 0;
    let counter = 0;
    const count = {
        'a': 0,
        'b': 0,
        'c': 0
    }
    
    while (rightIdx < s.length) {
        // Increment the count of the current character
        count[s[rightIdx]]++;

        // Check for valid window
        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
            // Account for all substrings from rightIx to the end
            counter += s.length - rightIdx;

            // Move the left pointer and decrement the count of that char
            count[s[leftIdx]]--;
            leftIdx++;
        };

        // Move the right pointer
        rightIdx++;
    }

    return counter;
};

// // testing
// console.log(numberOfSubstrings('abc'))
// console.log(numberOfSubstrings("abcabc"))
// console.log(numberOfSubstrings("aaacb"))