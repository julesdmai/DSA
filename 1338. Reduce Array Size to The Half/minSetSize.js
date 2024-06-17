/**
 * @param {number[]} arr
 * @return {number}
 */
// Strategy: Iterate through creating a hashmap, sort by values descending, keep adding to results until we get the values we need
// Input: O(nlogn) // spaceO(n)
// Ouptut: Number representing array length
var minSetSize = function(arr) {
    const numsMap = {};
    for (const num of arr) {
        numsMap[num] = (numsMap[num] || 0) + 1
    };

    const entries = Object.entries(numsMap);
    entries.sort((a, b) => b[1] - a[1]); // sort descending by values

    
    // Add to results until the numbers in results represent over half of the elements
    let count = 0;
    const results = [];

    let i = 0;
    while (count < arr.length / 2) {
        count += entries[i][1];
        results.push(entries[i][0]);
        i++;
    }
    return results.length;
};

// testing
// console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))
// console.log(minSetSize([7,7,7,7,7,7]))
// console.log(minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]))