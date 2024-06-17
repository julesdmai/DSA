/**
 * @param {number[]} arr
 * @return {number}
 */
// Strategy: Iterate through creating a hashmap, sort by values descending, keep adding to results until we get the values we need
// Input: O(nlogn) // spaceO(n)
// Ouptut: Number representing array length
var minSetSize = function(arr) {
    const frequencyMap = {};
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    };

    const sortedFrequencies = Object.values(frequencyMap).sort((a, b) => b - a); // sort descending by values

    
    // Add to results until the numbers in results represent over half of the elements
    let removedCount = 0;
    let setSize = 0;
    for (const freq of sortedFrequencies) {
        removedCount += freq;
        setSize++;
        if (removedCount >= arr.length / 2) break;
    }

    return setSize;
};

// testing
// console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))
// console.log(minSetSize([7,7,7,7,7,7]))
// console.log(minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]))