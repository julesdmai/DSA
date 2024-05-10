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

// This method allows the algorithm to iterate through the binary representation from the least significant to the most significant bit, counting the 1s without explicitly converting the number to its binary form. It's a clever way to handle binary data directly with arithmetic operations.


const convertToBinary = (Number) => {
    const binaryForm = Number.toString(2);
    return binaryForm;
}

const countNumberOfOnes = (String) => {
    const array = [... String];
    let numberOfOnes = 0;
    array.forEach((el) => {
        if (el === '1') numberOfOnes++;
    })
    return numberOfOnes;
}

var countBits = function(n) {
    const result = [];
    for (let i = 0; i < n + 1; i ++) {
        // step 1: convert number to binary form
        const binaryForm = convertToBinary(i);
        // step 2: count number of 1's
        const numberOfOnes = countNumberOfOnes(binaryForm);
        // step 3: push to ouptut array
        result.push(numberOfOnes);
    }
    return result;
};

// Testing for countBits()
console.log(countBits(2)); // Output: [0, 1, 1]
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]

