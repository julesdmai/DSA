/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Strategy: Colleect positives and negative numbers, combine two arrays into one alternating
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Array of numbers
var rearrangeArray = function(nums) {
    // Collect positive and negative numbers
    const positiveNums = [];
    const negativeNums = [];

    nums.forEach((number) => {
        if (number > 0) positiveNums.push(number);
        else negativeNums.push(number);
    });

    // Merge two arrays
    const mergedArray = [];
    for (let i = 0; i < positiveNums.length; i++) {
        mergedArray.push(positiveNums[i]);
        mergedArray.push(negativeNums[i]);
    }
    return mergedArray;
};

// // testing
// console.log(rearrangeArray([3,1,-2,-5,2,-4]));