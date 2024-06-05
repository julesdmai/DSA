/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // If there are fewer than 2 days, we can't make any transactions.
    if (prices.length < 2) return 0;

    // Initialize cash to 0, meaning no stock and no profit at the start.
    let cash = 0;
    // Initialize hold to -prices[0], meaning buying the stock on the first day, 
    // so the profit is negative the price of the stock.
    let hold = -prices[0];

    // Iterate over each day's price starting from the second day.
    for (let i = 1; i < prices.length; i++) {
        // Update cash to the maximum of:
        // - keeping the current cash (not selling the stock today)
        // - selling the stock today, which would add today's price to hold and subtract the fee.
        cash = Math.max(cash, hold + prices[i] - fee);

        // Update hold to the maximum of:
        // - keeping the current hold (not buying new stock today)
        // - buying the stock today, which would subtract today's price from cash.
        hold = Math.max(hold, cash - prices[i]);
    }

    // The final result is the maximum profit without owning any stock at the end.
    return cash;
};

// // Testing
// console.log(maxProfit([1,3,2,8,4,9], 2)); // Output: 8
// console.log(maxProfit([1,3,7,5,10,3], 3)); // Output: 6
