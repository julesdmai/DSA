/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    if (prices.length < 2) return 0;

    // Initialize totalProfit
    let totalProfit = 0;

    let holding = Infinity;

    // Iterate through prices
    for (let i = 1; i < prices.length; i++) {
        // Two pointers to day prior and current day
        holding = Math.min(holding, prices[i - 1]);
        let currentDay = prices[i];
        let profits = currentDay - holding - fee; 
        // If difference > 0, add it to totalprofit   
        if (profits > 0) {
            totalProfit += profits;
            holding = prices[i];
        }
    }
    // Return totalProfit
    return totalProfit; 
};

// testing
// console.log(maxProfit([1,3,2,8,4,9], 2));
// console.log(maxProfit([1,3,7,5,10,3], 3));