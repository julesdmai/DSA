
var RecentCounter = function() {
    this.requests = [];
    this.range = [];
    this.size = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
// O(n^2) - O(n) for pushing requests in then * O(n) for the forEach 
RecentCounter.prototype.ping = function(t) {
    // Check edge case

    // Add to requests
    this.requests.push(t)
    // Add to size
    this.size++;
    this.range = [t - 3000, t];

    // Count the elements that are within range
    let counter = 0;
    this.requests.forEach((el) => {
        if (el >= this.range[0] && el <= this.range[1]) counter++
    })
    if (counter === 0) return;
    else return counter;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */