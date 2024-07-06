/**
 * @param {string} s
 * @return {number}
 */

// Strategy: Two pointers, if pointers' values are equal then advance pointers, otherwise return distance between the two
// O(n) // spaceO(1)
// Input: String
// Output: Number
var minimumLength = function(s) {
    // Two pointers
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        let leftChar = s[leftPointer];
        let rightChar = s[rightPointer];

        // If value of pointers 1 and 2 are equal then advance pointers
        if (leftChar === rightChar) {
            // Advance left and right pointer to next non-same char
            while (s[leftPointer] === leftChar) {
                leftPointer++;
            }
            while (s[rightPointer] === rightChar) {
                rightPointer--;
            }
        }
        else {
            break;
        }
    }
    // Return distance between the two pointers or 0 at minimum
    return rightPointer < leftPointer ? 0 : rightPointer + 1 - leftPointer;
};

// // testing
// console.log(minimumLength('cabaabac'));
// console.log(minimumLength('ca'));
// console.log(minimumLength('aabccabba'));