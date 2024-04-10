/**
 * @param {number[]} gain
 * @return {number}
 */
// Questions - What is the range of values for n, the array length. What if there are multiple peaks of the same altitude? Confirm function signature is array of nums input and integer output
// O(n) = O(n) for first iteration + O(n) for Math.max
// Space-O(n) we are constructing an array of heights
var largestAltitude = function(gain) {
    // Check edge cases
    // Initialize new array of heights
    const arrOfHeights = [];
    let currentHeight = 0;
    arrOfHeights.push(currentHeight);

    // Iterate through gains, constructing new array
    gain.forEach((el) => {
        currentHeight += el;
        arrOfHeights.push(currentHeight);
    })
    // Return the max
    return Math.max(...arrOfHeights);
};

const gains = [-5,1,5,0,-7];
console.log(largestAltitude(gains));