/**
 * @param {number[]} prices
 * @return {number[]}
 */

// Strategy: Use a stack to search for subsequent values for discount
// O(n) // spaceO(n)
// Input: Array numbers
// Output: Array numbers
var finalPrices = function(prices) {
    const results = prices.slice();
    const stack = [];

    // Iterate through input prices
    for (let i = 0; i < prices.length; i++) {

        // Check top of stack for suitable discount)
        while (stack.length && results[stack[stack.length - 1]] >= prices[i]) {
            // Condition met, modify price
            let index = stack.pop();
            results[index] -= prices[i];
        }
        // Always push current index
        stack.push(i);
    }
    // Return results
    return results;
};

// // testing
// console.log(finalPrices([8,4,6,2,3]))
// console.log(finalPrices([1,2,3,4,5]))
// console.log(finalPrices([10,1,1,6]))