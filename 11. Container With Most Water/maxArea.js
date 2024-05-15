/**
 * @param {number[]} height
 * @return {number}
 */
// Helper function to calculate areas
const calculateAreas = (array) => {
    const numberOfLines = array.length;
    const arrayOfAreas = [];

    for (let i = 0; i < numberOfLines - 1; i++) {
        let x = numberOfLines - i - 1
        let y = Math.min(array[i], array[numberOfLines - 1]);
        let area = x * y;
        arrayOfAreas.push(area);
    }

    return arrayOfAreas;
}

// Strategy: factorial
var maxArea = function(height) {
    const maxAreas = [];

    let cloneArray = height.slice();
    maxAreas.push(calculateAreas(cloneArray));

    while (cloneArray.length > 2) {
        cloneArray.pop();
        maxAreas.push(calculateAreas(cloneArray));
    }

    return Math.max(...maxAreas.flat());
};

// // // testing
// console.log(maxArea([1,8,6,2,5,4,8,3,7])) // Output: 49
// console.log(maxArea([1, 1])) // Output: 1