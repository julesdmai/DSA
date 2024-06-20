/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Strategy: One pass, Dijkstra, 3 pointers one for 0 position, one for 2 position, one for current
// O(n) // spaceO(1)
// Input: Array of numbers
// Output: void
var sortColors = function(nums) {
    let low = 0; // ensures all positions before are 0's
    let mid = 0; // traverse the array
    let high = nums.length - 1; // ensures all positions after are 2's

    while (mid <= high) {
        // Encountered a 0, move it to the beginning, advance low and mid pointers
        if (nums[mid] === 0) {
            [ nums[mid], nums[low] ] = [ nums[low], nums[mid] ];
            low++;
            mid++;
        } 
        // Encountered a 1, advance current pointer (1 will get swapped as needed)
        else if (nums[mid] === 1) {
            mid++;
        } 
        // Encountered a 2, move it to the end 
        else if (nums[mid] === 2) {
            [ nums[mid], nums[high] ] = [ nums[high], nums[mid] ];
            high--;
        }
    }
};

// //teseting
// console.log(sortColors([2,0,2,1,1,0]))
