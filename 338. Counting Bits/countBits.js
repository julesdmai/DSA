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

const convertToBinary = (Number) => {
    return 'binary form';
}

const countNumberOfOnes = (String) => {
    const array = [... String];
    const numberOfOnes = 0;
    array.forEach((el) => {
        if (el === '1') numberOfOnes++;
    })
    return numberOfOnes;
}


var countBits = function(n) {
    const cache = {};
    const result = [];
    for (let i = 0; i < n; i ++) {
        // step 1: convert number to binary form
        const binaryForm = convertToBinary(i);
        // step 2: count number of 1's
        const numberOfOnes = countNumberOfOnes(binaryForm);
        // step 3: push to ouptut array
        result.push(numberOfOnes);
    }
    return result;
};

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





// // Testing for countBits()
// const n = 4;
// const result = countBits(n);
// console.log(result);