/**
 * @param {number[]} arr
 * @return {boolean}
 */
// O(n)
var uniqueOccurrences = function(arr) {
    // Check edge cases
    // Create an object to store key-value pairs
    const cache = {};

    // Iterate through the input arr
    for (let i = 0; i < arr.length; i++) {
        (!cache[arr[i]]) ? cache[arr[i]] = 1 : cache[arr[i]]++
    }

    // Logic to check for unique values
    const cacheValues = Object.values(cache);
    const uniqueCacheValues = [... new Set(cacheValues)];

    // Return bool
    return (cacheValues.length === uniqueCacheValues.length);
};

// Testing for uniqueOccurrences()
// const arr = [1,2,2,1,1,3];
// const arr = [-3,0,1,-3,1,1,1,-3,10,0];
// const arr = [1,2];
// console.log(uniqueOccurrences(arr));