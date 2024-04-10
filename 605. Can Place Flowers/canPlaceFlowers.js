/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// O(n) - for iterating through the array
// Input: Array of nums, Num
// Output: Bool
var canPlaceFlowers = function(flowerbed, n) {
    // Check edge cases
    if (n === 0) return true;

    // Iterate through input Array flowerbed
    for (let i = 0; i < flowerbed.length; i++ ) {
        if (flowerbed[i] === 1) continue;

        let emptyPrev = (i - 1 === -1 || flowerbed[i - 1] === 0);
        let emptyNext = (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)

        if (emptyPrev && emptyNext) {
            flowerbed[i] = 1;
            n--
            i++ // skip the next plot 
            if (n <= 0) return true;
        }
    }

    // End of loop
    return false;
};

// Testing for canPlaceFlowers()
const flowerbed = [1,0,0,0,1], n = 1;
console.log(canPlaceFlowers(flowerbed, n));