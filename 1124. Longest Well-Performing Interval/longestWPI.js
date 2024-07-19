/**
 * @param {number[]} hours
 * @return {number}
 */

// Strategy: Keep track of the state of greatestWPI, currentWPI, numTDays, NumNonTDays, iterate through processing the days calculating greatestWPI, reverse the list and do it again, return the longest
// O(n) // spaceO(1)
// Input: Array of numbers
// Output: Number
var longestWPI = function(hours) {
    // Create process function
    // Keep track of greatest well-performing interval, current well-performing interval, number of tiring days, and number of non-tiring days
    const calculateGreatestWPI = (array) => {
        let greatestWPI = 0;
        let currentWPI = 0;
        let numTDays = 0;
        let numNonTDays = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > 8) {
                numTDays++;
            }

            else {
                numNonTDays++;
                if (numTDays === 0) numNonTDays = 0;
            }

            if (numTDays - numNonTDays > 0) {
                currentWPI = numTDays + numNonTDays
                greatestWPI = Math.max(currentWPI, greatestWPI);
            }
        }
        return greatestWPI;
    }

    // Invoke process function on input hours
    const greatestWPI_1 = calculateGreatestWPI(hours);

    // Reverse the list and do it again
    hours.reverse();
    const greatestWPI_2 = calculateGreatestWPI(hours);

    // Return the max
    return Math.max(greatestWPI_1, greatestWPI_2);
};

// testing
// console.log(longestWPI([9,9,6,0,6,6,9]))
// console.log(longestWPI([6,6,6]))
// console.log(longestWPI([9,6,9]))
// console.log(longestWPI([6,9,6]))