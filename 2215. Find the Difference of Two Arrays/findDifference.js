/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// O(n) - Iterating through the set once, deleting shared values
var findDifference = function(nums1, nums2) {
    // Check edge cases
    // Make into sets
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Iterate through checking for nums shared by both sets
    set1.forEach((point) => {
        if (set2.has(point)) {
            set1.delete(point);
            set2.delete(point);
        }
    })

    // Return array
    return [Array.from(set1), Array.from(set2)];
};

// Testing for findDifference()
const nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1, nums2));