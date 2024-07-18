/**
 * @param {string} s
 * @return {string}
 */

// Strategy: Split chars into elements in an array, form a set from the array removing duplicates, form an array back from the set, sort the array, join and return
// O(nlogn) // spaceO(n)
// Input: string
// Output: string
var removeDuplicateLetters = function(s) {
    // Set-wash to remove duplicates
    const arrayS = s.split('');
    const setS = new Set(arrayS);
    const arraySNoDuplicates = Array.from(setS);

    // Sort array
    arraySNoDuplicates.sort();

    // Join and return
    return arraySNoDuplicates.join('');
};

// testing
// console.log(removeDuplicateLetters('bcabc'));
// console.log(removeDuplicateLetters('cbacdcbc'));