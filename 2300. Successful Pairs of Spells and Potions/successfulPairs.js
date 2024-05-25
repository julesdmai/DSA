/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

// O(n^2) // spaceO(n^2)
var successfulPairs = function(spells, potions, success) {
    // Initialize return variable
    const pairs = [];


    // Iterate over spells
    for (let spell of spells) {
        let successCounter = 0;
        // Iterate over potions
        for (let potion of potions) {
            // If spell * potion >= success, counter ++ 
            if (spell * potion >= success) successCounter++;
            // At end of potion iteration, push counter

        }
        pairs.push(successCounter);
    }

    return pairs;
};


// // Testing
// const spells1 = [5,1,3]
// const potions1 = [1,2,3,4,5]
// const success1 = 7
// console.log(successfulPairs(spells1, potions1, success1)) // -> [4,0,3]

// const spells2 = [3,1,2]
// const potions2 = [8,5,8]
// const success2 = 16
// console.log(successfulPairs(spells2, potions2, success2)) // -> [2,0,2]