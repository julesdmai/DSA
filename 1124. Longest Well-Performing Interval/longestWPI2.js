/**
 * @param {number[]} hours
 * @return {number}
 */

// Strategy: Transform array into 1's and -1's, store state of prefixSum, array of prefixSums, maxLength, and a stack to keep track of indices where the prefixSum decreases 
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Number
var longestWPI = function(hours) { 
    const transformed = hours.map((hour) => hour > 8 ? 1 : -1);

    let prefixSum = 0;
    let maxLength = 0;
    const prefixSums = [0]; // store prefix sums
    const stack = []; // store indices where prefix sum decreases

    // Calculate prefix sums
    for (let i = 0; i < transformed.length; i++) {
        prefixSum += transformed[i];
        prefixSums.push(prefixSum);
    }

    // Find indices where prefixSum decreases
    for (let i = 0; i < prefixSums.length; i++) {
        if (stack.length === 0 || prefixSums[stack[stack.length - 1]] > prefixSums[i]) {
            stack.push(i);
        }
    }

    // Iterate from the end to the beginning of the prefixSums array
    for (let i = prefixSums.length - 1; i >= 0; i--) {
        // While there are elements in the stack
        // While the prefix sum at the top of the stack is less than the current prefixSum
        while (stack.length > 0 && prefixSums[stack[stack.length - 1]] < prefixSums[i]) {
            // Pop the top index from the stack
            let prevIndex = stack.pop();

            // Calculate the length of the interval
            let intervalLength = i - prevIndex;

            // Update the maxLength if this interval is longer
            maxLength = Math.max(maxLength, intervalLength);
        }
    }

    return maxLength;
};

// // testing
// console.log(longestWPI([9,9,6,0,6,6,9]))
// console.log(longestWPI([6,6,6]))
// console.log(longestWPI([9,6,9]))
// console.log(longestWPI([6,9,6]))