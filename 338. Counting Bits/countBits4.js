/**
 * @param {number} n
 * @return {number[]}
*/

// ex. 1
// input: n = 2
// output: [0,1,1]
// numerical --> binary depiction
// 0 -> 0
// 1 --> 1
// 2 --> 10

// ex. 2
// input: n = 5
// output: [0,1,1,2,1,2]
// 0 -> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101


// 6 --> 110
// 7 --> 111
// 8 --> 1000
// 9 --> 1001
// 10 --> 1010
// 11 --> 1011
// 12 --> 1100
// 13 --> 1101
// 14 --> 1110
// 15 --> 1111

// This method allows the algorithm to iterate through the binary representation from the least significant to the most significant bit, counting the 1s **without explicitly converting the number to its binary form**. It's a clever way to handle binary data directly with arithmetic operations.

var countBits = function(n) {
    let result = [];

    // Function to count the number of '1's in the binary representation
    function countOnes(num) {
        let count = 0;
        
        // We are only counting the right-most bit or the least significant bit (LSB) on each iteration
        while (num !== 0) {
            if (num % 2 === 1) count++ // LSB has been accounted for, now we need to right-shift the bits
            num = Math.floor(num / 2); // This effectively right shifts the bits. We halve the decimal number and drop the fractional units

            // The below are other options to right-shift the bits
            // num >> 1; // Bitwise Right Shift Operator
            // num = ~~(num / 2); // Double Bitwise NOT Operator - effectively truncates any fractional components of a number
        }
        return count;
    }

    // Iterate from 0 to n and apply the countOnes function
    for (let i = 0; i <= n; i++) {
        result.push(countOnes(i));
    }

    return result;
};

// Testing for countBits()
console.log(countBits(2)); // Output: [0, 1, 1]
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]

