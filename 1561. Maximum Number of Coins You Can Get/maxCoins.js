/**
 * @param {number[]} piles
 * @return {number}
 */

// Strategy: Sort ascending, 2 pointers for me and Bob, loop until pointers cross, advance pointers, end loop return counter
// O(nlogn) // spaceO(1)
// Input: Array of numbers
// Output: Number
var maxCoins = function(piles) {
    // Sort ascending
    piles.sort((a, b) => a - b);

    // Initialie two pointers for me and Bob with Bob always being the lowest value and me being the second to highest value
    let mePointer = piles.length - 2;
    let bobPointer = 0;

    let myCoins = 0;
    while (bobPointer < mePointer) {
        myCoins += piles[mePointer];
        mePointer -= 2; // Advance pointers
        bobPointer += 1;
    }

    // End loop return counter
    return myCoins;
};

// // testing
// console.log(maxCoins([9,8,7,6,5,1,2,3,4]));
// console.log(maxCoins([2,4,1,2,7,8]));