/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // Helper function to determine if Koko can eat all banans at speed k within h hours
    const canFinish = (k) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return (hours <= h) ? true : false;
    }

    // Binary search for minimum eating speed
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canFinish(mid)) {
            high = mid; // Try a slower speed
        } else {
            low = mid + 1 // Increase the speed
        }
    }

    // Eventually, low === high
    return low;
};

// // Testing
// console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23