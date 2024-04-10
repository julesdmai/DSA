/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Questions - how big can nums be? what if k is 0? what if k i negative? what if k > nums length
// O(n)
// Space-O(1)
var findMaxAverage = function(nums, k) {
    // Check edge cases

    // Establish the window
    const initialWindow = nums.slice(0, k);
    let sum = initialWindow.reduce((a,b) => a + b, 0);
    let maxSum = sum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};

// Testing for findMaxAverage()
const nums = [1,12,-5,-6,50,3], k = 4;
console.log(findMaxAverage(nums, k));