/**
 * @param {number[]} hours
 * @return {number}
 */

// Strategy: Transform array into 1's and -1's, store state of prefixSum, maxLength, and hashmap prefixSumMap to store first occurence of each prefixSum, check for prefixSum - 1 in map
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Number
var longestWPI = function(hours) { 
    const transformed = hours.map((hour) => hour > 8 ? 1 : -1);
    let prefixSum = 0;
    let maxLength = 0;
    const prefixSumMap = new Map();

    for (let i = 0; i < transformed.length; i++) {
        // Update prefixSum
        prefixSum += transformed[i];

        // Check if current prefixSum is positive
        if (prefixSum > 0) {
            // If positive, the interval from the start to the current index is well-performing
            maxLength = i + 1;
        } else {
            // Store the first occurence of this prefixSum in the map
            if (!prefixSumMap.has(prefixSum)) {
                prefixSumMap.set(prefixSum, i);
            }

            // Check if the target prefix sum exists in the map
            let targetPrefixSum = prefixSum - 1;

            if (prefixSumMap.has(targetPrefixSum)) {
                // Calculate the length of the interval
                let intervalLength = i - prefixSumMap.get(targetPrefixSum);

                // Update the max length if this interval is longer
                maxLength = Math.max(maxLength, intervalLength);
            }
        }
    }

    return maxLength;
};

// testing
// console.log(longestWPI([9,9,6,0,6,6,9]))
// console.log(longestWPI([6,6,6]))
// console.log(longestWPI([9,6,9]))
// console.log(longestWPI([6,9,6]))