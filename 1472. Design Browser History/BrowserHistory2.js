// Strategy: Use an array to keep track of history, track current position within history, mutate array as needed

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentPosition = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.splice(this.currentPosition + 1);
    this.history.push(url);
    this.currentPosition = this.history.length - 1;
    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    // Attempting to move too many steps back
    if (this.currentPosition - steps <= 0) {
        this.currentPosition = 0
    } else {
        this.currentPosition -= steps;
    }
    return this.history[this.currentPosition];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    // Attempting to move too many steps forward
    if (this.currentPosition + steps > this.history.length - 1) {
        this.currentPosition = this.history.length - 1;
    } else {
        this.currentPosition += steps;
    }
    return this.history[this.currentPosition];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// // Testing
// obj = new BrowserHistory("homepage");
// obj.visit("google.com");