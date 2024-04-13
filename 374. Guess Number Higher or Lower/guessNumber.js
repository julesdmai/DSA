/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// O(logn)
var guessNumber = function(n) {
    let lowerBound = 1;
    let upperBound = n;
    while (true) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        let guessResults = guess(mid);
        if (guessResults === 0) return mid;
        else if (guessResults < 0) {
            // guess is too high
            upperBound = mid - 1;
        } else {
            // guess is too low
            lowerBound = mid + 1;
        }
    }
};