/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // If the array has only one price, return 0 profit
    if (prices.length === 1) return 0;

    let totalProfit = 0;

    // Iterate through prices starting from the second day (index 1)
    for (let i = 1; i < prices.length; i++) {
        // Check if the prices on current day is greater than prior day
        if (prices[i] > prices[i - 1]) {
            // Calculate the profit from transaction (buy on previous day, sell on current day)
            let profit = prices[i] - prices[i - 1];
            totalProfit += profit;
        }
    }

    return totalProfit;
    
};

// // testing
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,6,4,3,1]));
