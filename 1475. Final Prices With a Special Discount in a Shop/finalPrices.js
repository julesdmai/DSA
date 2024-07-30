/**
 * @param {number[]} prices
 * @return {number[]}
 */

// Strategy: Brute force nested loops
// O(n^2) // spaceO(n)
// Input: Array numbers
// Output: Array numbers
var finalPrices = function(prices) {
    const results = [];

    // Iterate through input prices array
    for (let i = 0; i < prices.length; i++) {
        // Inner loop iterate through subsequent elements to compare
        let j = i + 1;
        while (j < prices.length) {
            // Condition met, push discounted price and break loop
            if (prices[j] <= prices[i]) {
                let discountedPrice = prices[i] - prices[j];
                results.push(discountedPrice);
                break;
            }
            j++;
        };

        // End loop unable to match condition, push original undiscounted price
        if (j >= prices.length) {
            results.push(prices[i]);
        }
    }
    // Return results array
    return results;
};

// // testing
// console.log(finalPrices([8,4,6,2,3]))
// console.log(finalPrices([1,2,3,4,5]))
// console.log(finalPrices([10,1,1,6]))