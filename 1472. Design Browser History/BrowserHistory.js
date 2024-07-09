// Strategy: Implement a stack to keep track of history, use a variable to keep state of current position

/**
 * @param {string} homepage
 */
// Input: string
// Output: null
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentPosition = 0;
};




/** 
 * @param {string} url
 * @return {void}
 */
// Pushes onto stack, reassigns currentPosition, clears forward history
// Input: string
// Output: null
BrowserHistory.prototype.visit = function(url) {
    this.history = this.history.slice(0, this.currentPosition + 1);
    this.history.push(url);
    this.currentPosition = this.history.length - 1;
};





/** 
 * @param {number} steps
 * @return {string}
 */
// Decrements currentPosition, make sure to stay in bounds
// Input: Number representing steps
// Output: String representing website we are currently at
BrowserHistory.prototype.back = function(steps) {
    this.currentPosition = Math.max(0, this.currentPosition -= steps);
    return this.history[this.currentPosition];
};





/** 
 * @param {number} steps
 * @return {string}
 */
// Increments currentPosition, make sure to stay in bounds
// Input: Number representing steps
// Output: String representing website we are currently at
BrowserHistory.prototype.forward = function(steps) {
    let lastPosition = this.history.length - 1;
    this.currentPosition = Math.min(this.currentPosition += steps, lastPosition);
    return this.history[this.currentPosition];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */