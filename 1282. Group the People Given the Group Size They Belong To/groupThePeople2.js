/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

// Strategy: Use a hashmap to store keys = groups and values being the person[i]
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: Array of array of numbers (grouped)
var groupThePeople = function(groupSizes) {
    const sizeToPeople = {};
    const results = [];
    
    // Itereate through input array creating hashmap where key = groupNumber and value = array of persons
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (!sizeToPeople[size]) {
            sizeToPeople[size] = []; // If group does not exist yet, initialize it
        }
        sizeToPeople[size].push(i); // Add this person to the group

        // Check if we have hit maximum group size
        if (sizeToPeople[size].length === size) {
            results.push(sizeToPeople[size]);
            sizeToPeople[size] = []; // Reset group
        }
    }

    return results;
};

// // testing
// console.log(groupThePeople([3,3,3,3,3,1,3]));
// console.log(groupThePeople([2,1,3,3,3,2]));