/**
 * @param {number[]} nums
 * @return {number}
 */

// Strategy: Sort ascending, iterate through, keep a pointer at the first element until we satisfy condition, second pointer to iterate through the elements, essentially two pointers
// O(nlogn + n) // spaceO(n)
var maximizeGreatness = function(nums) {
    // Sort nums in ascending order
    nums.sort((a, b) => a - b);

    let greatnessCount = 0;
    let j = 0; // Comparison pointer

    // Iterate through the sorted array
    for (let i = 0; i < nums.length; i++) {
        // Compare nums[j] with nums[i]
        if (nums[j] < nums[i]) {
            // Increment greatness count and move j to the next element
            greatnessCount++;
            j++;
        }
    }

    return greatnessCount;
};

// testing
// console.log(maximizeGreatness([1,3,5,2,1,3,1])); // 4
// console.log(maximizeGreatness([1,2,3,4])); // 3
