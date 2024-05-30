/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;

    // Sort the points based on their end coordinates
    points.sort((a,b) => a[1] - b[1]);
    
    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        // If the start of the current balloon is greater than the end of the previous one, we need a new arrow, the old arrow is no longer overlapping with the current balloon
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }

    return arrows;

};

// testing
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));