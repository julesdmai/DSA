/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

// Strategy: Use a hashmap to store keys = groups and values being the person[i]
// O(n) // spaaceO(n)
// Input: Array of numbers
// Output: Array of array of numbers (grouped)
var groupThePeople = function(groupSizes) {
    const groupMap = {};
    
    // Itereate through input array creating hashmap where key = groupNumber and value = array of persons
    for (let i = 0; i < groupSizes.length; i++) {
        let thisPerson = groupSizes[i]; // Ex. This person belongs to group 3
        groupMap[thisPerson] // Does this group exist in hashmap? 
        ? groupMap[thisPerson].push(i) // Add this person to the group
        : groupMap[thisPerson] = [i]; // Create a key-value pair and include this person
    }

    const results = [];
    // Itereate through the hashmap to create the return array
    for (const key in groupMap) {
        let groupNumber = Number(key); // Convert key to Number form to do math
        let group = groupMap[key];
        let groupCount = group.length;

        if (groupCount === groupNumber) {
            results.push(group); // Group size and group number matches
        } else {
            // We have too many people, need to split this group into smaller sub-groups
            let numRepeats = groupCount / groupNumber;
            for (let i = 0; i < numRepeats; i++) {
                results.push(group.slice(i * groupNumber, (i + 1) * groupNumber));
            }
        }
    }

    // Return the final results
    return results;
};

// // testing
// console.log(groupThePeople([3,3,3,3,3,1,3]));
// console.log(groupThePeople([2,1,3,3,3,2]));