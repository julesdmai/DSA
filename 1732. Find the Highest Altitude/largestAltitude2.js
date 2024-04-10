/**
 * @param {number[]} gain
 * @return {number}
 */
// Questions - What is the range of values for n, the array length. What if there are multiple peaks of the same altitude? Confirm function signature is array of nums input and integer output
// O(n) = O(n) for first iteration + O(n) for Math.max
// Space-O(n) we are constructing an array of heights
var largestAltitude = function(gain) {
    // Check edge cases
    let maxAltitude = 0;
    let currentAltitude = 0;

    // Iterate through each gain, updating current and max altitudes as you go
    gain.forEach((el) => {
        currentAltitude += el;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    });

    return maxAltitude;
};

const gains = [-5,1,5,0,-7];
console.log(largestAltitude(gains));