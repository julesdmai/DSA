/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Initialize return variable
    let XORResult = 0;

    // Iterate through each number in the input array `nums`
    for (let num of nums) {
        // Perform the XOR operation between the current `single` value and `num`
        // This will toggle the bits of `single` based on `num`
        XORResult = XORResult ^ num;

        // Print the intermediate value for clarity (optional, for debugging purposes)
        console.log(`After XOR with ${num}, XORResult is now: ${XORResult}`);
    }

    // The final value of `XORResult` will be the number that doesn't have a duplicate
    return XORResult;
};

// // Testing for singleNumber()
// const array1 = [2, 2, 1];
// console.log(singleNumber(array1)); // Output: 1

// const array2 = [4, 1, 2, 1, 2];
// console.log(singleNumber(array2)); // Output: 4

// const array3 = [1];
// console.log(singleNumber(array3)); // Output: 1
