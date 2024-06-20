/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Strategy: Create frequencyMap, iterate over array again overwriting values from frequencyMap
// O(n) // spaceO(n)
// Input: Array of numbers
// Output: void
var sortColors = function(nums) {
    const frequencyMap = {
        0: 0,
        1: 0,
        2: 0
    };

    // Construct frequencyMap
    for (let num of nums) {
        frequencyMap[num] = frequencyMap[num] + 1
    }

    // Iterate over array, overwriting current value using frequencyMap
    for (let i = 0; i < nums.length; i++) {

        // Loop through frequency map keys in this order
        if (frequencyMap[0] > 0) {
            nums[i] = 0;
            frequencyMap[0] -= 1;
            continue;   
        };

        if (frequencyMap[1] > 0) {
            nums[i] = 1;
            frequencyMap[1] -= 1;
            continue;   
        }

        if (frequencyMap[2] > 0) {
            nums[i] = 2;
            frequencyMap[2] -= 1;
            continue;   
        }
    }

};

// //teseting
// console.log(sortColors([2,0,2,1,1,0]))
