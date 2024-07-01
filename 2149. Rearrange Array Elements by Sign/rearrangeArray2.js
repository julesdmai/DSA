/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Strategy: Two pointers for +/- numbers, traverse array, place numbers into the results array
// O(n) // spaceO(1)
// Input: Array of numbers
// Output: Array of numbers
var rearrangeArray = function(nums) {
    // Define the resulting array
    const result = new Array(nums.length);
    let posIndex = 0; 
    let negIndex = 1;

    // Assign numbers to either posIndices or negIndicies
    nums.forEach((number) => {
        if (number > 0) {
            result[posIndex] = number;
            posIndex += 2;
        } else {
            result[negIndex] = number;
            negIndex += 2;
        }
    })

    return result;
};

// // testing
// console.log(rearrangeArray([3,1,-2,-5,2,-4]));