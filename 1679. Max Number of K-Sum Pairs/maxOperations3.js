/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// O(nlogn) // spaceO(1)
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b); // sort in ascending

    let left = 0;
    let right = nums.length - 1;
    let counter = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            counter ++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return counter;
 };

 /* ------------------------------- CODE REVIEW ------------------------------ */
/*
1. Simplicity: the logic is straightforward and easy to understand
2. Sorting: Sorting is required for this to work and sorting takes O(nlogn) time and the two pointer scan takes O(n) time making this solution slower than the hashmap solution
3. No extra space: This solution uses constant extra space spaceO(1)
*/
