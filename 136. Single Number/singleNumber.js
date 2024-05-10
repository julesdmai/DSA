/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Cache all input numbers into an object
    const cache = {};

    nums.forEach((element) => {
        cache[element]
        ? cache[element]++
        : cache[element] = 1;
    })

    for ([key, value] of Object.entries(cache)) {
        if (value === 1) return Number(key);
    }
};

// // Testing for singleNumber()
// const array1 = [2,2,1];
// console.log(singleNumber(array1));
// const array2 = [4,1,2,1,2];
// console.log(singleNumber(array2));
// const array3 = [1];
// console.log(singleNumber(array3));