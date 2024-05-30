
var StockSpanner = function() {
    // Monotonic descending stack, smallest value will be at the top, largest value at the bottom, we will be keeping track of indices
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
// Input: Number representing today's price
// Output: Number representing the number of days in the current span
StockSpanner.prototype.next = function(price) {
    let span = 1; // Every day has a minimum span of 1

    // Pop elements from the stack while the price is at the top is less than or equal to the current price
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }

    // Push the current price and its span onto the stack
    this.stack.push([price, span]);

    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */