/**
 * @param {number[]} height
 * @return {number}
 */

// Strategy: factorial
var maxArea = function(height) {

    let maxArea = 0;
    let left = 0; // left starts at the first element
    let right = height.length - 1; // right starts at the last element

    // We will advance the left and right "pointers"
    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * minHeight);

        // Advance the smaller of the two lines, looking for a bigger line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    console.log(maxArea);
    return maxArea;
};

// // // testing

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // Output: 49
console.log(maxArea([1, 1])) // Output: 1