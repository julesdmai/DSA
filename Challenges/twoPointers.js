/* Given an integer array nums, move all the even integers to the beginning of the array 
followed by all the odd integers. The relative order of even and odd integers should be preserved.

Note: You must solve this problem in-place, without making a copy of the array.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0,1,2]
Output: [0,2,1]

Example 3:
Input: nums = [0,2,1]
Output: [0,2,1]
*/

const evenInFront = (array) => {
    let evenIndex = 0; // Pointer to place the next even number

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            // Swap even number to the front
            let temp = array[evenIndex];
            array[evenIndex] = array[i];
            array[i] = temp;
            evenIndex++;
        }
    }
    return array;
}

// // Testing
// console.log(evenInFront([3,1,2,4])); // [2,4,3,1]
// console.log(evenInFront([0,1,2])); // [0,2,1]
// console.log(evenInFront([0,2,1])); // [0,2,1]
