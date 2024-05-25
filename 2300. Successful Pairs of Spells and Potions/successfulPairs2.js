/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// Strategy - sort potions to be able to do binary search
// O(mlog(m)) + log(m)

var successfulPairs = function(spells, potions, success) {
    const pairs = []; // Initialize return variable
    potions.sort((a, b) => a - b); // Sort to do binary search

    // Helper function to find index of minimum good-enough potion for the spell
    const binarySearch = (array, target) => {
        let low = 0;
        let high = array.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (array[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low;
    }

    // Iterate through spells, applying binary search
    for (let spell of spells) {
        let target = Math.ceil(success / spell);
        let index = binarySearch(potions, target);
        pairs.push(potions.length - index);
    }

    return pairs;
};


// // // Testing
// const spells1 = [5,1,3]
// const potions1 = [1,2,3,4,5]
// const success1 = 7
// console.log(successfulPairs(spells1, potions1, success1)) // -> [4,0,3]

// const spells2 = [3,1,2]
// const potions2 = [8,5,8]
// const success2 = 16
// console.log(successfulPairs(spells2, potions2, success2)) // -> [2,0,2]