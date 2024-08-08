/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// STRATEGY: Stack to keep track of indices yet to encounter next greater element
// O(n) // spaceO(n)
// Input: Array of nums (2)
// Output: Array of nums
var nextGreaterElement = function(nums1, nums2) {
    const nextGreaterList = Array(nums2.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums2.length; i++) {
        // Process if this is next greater element 
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let index = stack.pop();
            nextGreaterList[index] = nums2[i];
            // Continue looping if this current number is the next greater for many others
        }

        stack.push(i);
    }
    // Could use map(?)
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i]);
        ans.push(nextGreaterList[idx]);
    }
    return ans;
};

// // TESTING
// console.log(nextGreaterElement([4,1,2],[1,3,4,2]));