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
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let leftChar = s[left];
        let rightChar = s[right];

        // If value of pointers 1 and 2 are equal then advance pointers
        if (leftChar === rightChar) {
            // Advance left and right pointer to next different char
            while (s[left] === leftChar) {
                left++;
            }
            while (s[right] === rightChar) {
                right--;
            }
        }
        else {
            break;
        }
    }
    // Return distance between the two pointers or 0 if the two pointers have crossed each other
    return right < left ? 0 : right + 1 - left;
};

// // testing
// console.log(minimumLength('cabaabac'));
// console.log(minimumLength('ca'));
// console.log(minimumLength('aabccabba'));