/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Strategy: Hashmap to store, return where values is 2
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Array of numbers representing the numbers that only appeared once
var singleNumber = function(nums) {
    const results = [];
    const numsMap = {};

    // Create hashmap
    for (let num of nums) {
        numsMap[num] = (numsMap[num] || 0) + 1
    };

    // Find keys where value is 1
    for (const [key, value] of Object.entries(numsMap)) {
        if (value === 1) {
            results.push(key);
        }
    }

    return results;
};

// testing
console.log(singleNumber([1,2,1,3,2,5]))
console.log(singleNumber([-1,0]))
console.log(singleNumber([0,1]))