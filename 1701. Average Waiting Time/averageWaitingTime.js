/**
 * @param {number[][]} customers
 * @return {number}
 */

// Strategy: Iterate through array of arrays, extract arrivalTime and prepTime, calculate finishTime, calculate waitTime
// O(n) // spaceO(1)
// Input: Array of tuples [arrivalTime, prepTime]
// Output: Number representing average wait time
var averageWaitingTime = function(customers) {
    let finishTime = 0; // Access to outer context finishTime
    let waitTime = 0; // Access to outer context waitTime

    // Iterate through customers
    for (let customer of customers) {
        const [arrivalTime, prepTime] = customer;
        // Update finishTime to greater value
        finishTime = Math.max(finishTime, arrivalTime) + prepTime;

        // Update waitTime
        waitTime += (finishTime - arrivalTime);
    }

    // Calculate average wait time to 6 decimals
    return (waitTime / customers.length).toFixed(6);
};

// // testing
// console.log(averageWaitingTime([[1,2],[2,5],[4,3]]))
// console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]))
