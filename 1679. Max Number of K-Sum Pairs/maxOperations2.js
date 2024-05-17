/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// O(n) // spaceO(n)
var maxOperations = function(nums, k) {
    let counter = 0;
    let numCounts = {};

    // Iterare through
    for (num of nums) {
        let target = k - num;

        if (numCounts[target] > 0) {
            counter++;
            numCounts[target]--; // Remove one occurence of the target
        } else {
            // Add the number to the object
            numCounts[num] = (numCounts[num] || 0) + 1;
        }
    }

    return counter;
};