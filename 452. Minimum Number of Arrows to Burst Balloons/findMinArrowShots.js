/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0)

    points.sort((a,b) => a[0] - b[0]);
    console.log(points);

    let minShots = 0;
    
    const backtracking = (arrayOfArrays, index) => {
        const focusedArray = arrayOfArrays[index];
        
        // Check if focused array overlaps with any in front
        if (focusedArray[0] < arrayOfArrays[index - 1]) {

        }
        // Check if focused array overlaps with any behind

        // Recursively call on the remainder of the array
        return;
    }

    

};

// testing
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));