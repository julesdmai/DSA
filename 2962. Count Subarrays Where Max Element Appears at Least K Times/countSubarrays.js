/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Strategy: Brute force iteration
// O(n^2) // spaceO(1)
// Input: Array of numbers, and a frequencyCount
// Output: Number representing count of subarrays
var countSubarrays = function(nums, k) {
    if (nums.length < k) return 0;
    let result = 0;

    // Calculate maxValue
    const frequencyMap = {};
    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    };
    const numbers = Object.keys(frequencyMap).map(Number);
    const maxValue = Math.max(... numbers);
    
    // Calculate number of subarrays that contain maxValue at least k times
    for (let start = 0; start < nums.length; start++) {
        let count = 0;

        for (let end = start; end < nums.length; end++) {
            if (nums[end] === maxValue) {
                count++;
            }

            if (count >= k) {
                result += (nums.length - end); // Count all subarrays ending at 'end' or after
                break; // No need to check further as all subsequent subarrays will also be valid
            }
        }
    }

    return result;
};

// testing
console.log(countSubarrays([0,0,1,2], 2));