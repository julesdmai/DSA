/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: Array of numbers
// Output: Number representing minimum operations to make all numbers in array divisble by 3
// O(n) // spaceO(1)
// Assume every number is one operation away from being divisble by 3 -> 7 - 1 = 6, 152 + 1 = 153, 1832+1 = 1833, therefore we just need to check if the number is already divisble by 3, if not then increment a counter
var minimumOperations = function(nums) {
    let minOperations = 0;
    for (let num of nums) {
        if (num % 3 !== 0) minOperations++;
    }
    return minOperations;
};

// // testing
// console.log(minimumOperations([1,2,3,4]))
// console.log(minimumOperations([3,6,9]))
