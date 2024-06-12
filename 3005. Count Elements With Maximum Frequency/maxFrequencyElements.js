/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy: Iterate through building cache, manipulate that cache to find highest frequencies and number of elements with that highest frequency
// O(3n) // spaceO(n)
// Input: Array
// Output: Number
var maxFrequencyElements = function(nums) {
    if (nums.length === 1) return 1;

    const cache = {}; // Keep track of frequencies

    nums.forEach((element) => {
        cache[element] = (cache[element] || 0) + 1;
    })
    
    // Find highest frequency
    const values = Object.values(cache);
    const maxFrequency = Math.max(...values);

    // Find frequency of highest frequency
    const filteredValues = values.filter((value) => value === maxFrequency);

    // Number of times we hit highest frequency * what is that frequency
    return filteredValues.length * maxFrequency;
};

// // Testing
// console.log(maxFrequencyElements([1,2,2,3,1,4]));