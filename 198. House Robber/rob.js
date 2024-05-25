/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let index = 0;

    // Helper function to process the maximum sum of array given starting index
    const process = (index, array) => {
        let max = array[index];
        
        while (index + 2 < array.length) {
            let oneStep = array[index + 2];
            let twoSteps = array[index + 3];

            if (oneStep > twoSteps || twoSteps === undefined) {
                max += oneStep;
                index += 2;
            } else {
                max += twoSteps;
                index += 3;
            }
        }

        return max;
    }

    let startingAtZeroIndex = process(0, nums);
    let startingAtFirstIndex = process(1, nums);

    return (startingAtZeroIndex > startingAtFirstIndex) ? startingAtZeroIndex : startingAtFirstIndex;
};

// testing
// console.log(rob([1,2,3,1])); // -> 4
// console.log(rob([2,7,9,3,1])); // -> 12
// console.log(rob([2, 1, 1, 2 ])); // -> 4
