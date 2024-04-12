var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
// O(n) - for iterating through the pings
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    // Remove requests that are older than t-3000
    while (this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    
    // Return the filtered array (no old requests)
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
