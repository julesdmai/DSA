/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy: Sort ascending, take increasing cuts of smallest and greatest slices, compare slices
// O(nlogn + n^2) // spaceO(n)
var maximizeGreatness = function(nums) {
    // Sort nums ASCENDING
    nums.sort((a, b) => a - b);

    // Initialize slice size
    let sliceSize = 1;

    // Loop endlessly
    while (true) {
        // Take smallerNums slice
        let smallerNums = nums.slice(0, sliceSize);

        // Take biggerNums slice
        let biggerNums = nums.slice(-sliceSize);

        // Iterate through comparing slices
        for (let i = 0; i < biggerNums.length; i++) {
            // If biggerNums is ever smaller, then we break and we return slice size
            if (biggerNums[i] <= smallerNums[i]) break; return sliceSize - 1; // have to backtrack by 1 size since this size failed
        }
        // At end of slice loop, we increment slice size
        sliceSize++;
    }
};

// testing
// console.log(maximizeGreatness([1,3,5,2,1,3,1])); // 4
// console.log(maximizeGreatness([1,2,3,4])); // 3
