/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n) // spaceO(n)
var equalPairs = function(grid) {
    const rowCache = {};
    const columnCache = {};

    // Helper function to convert array to string to serve as a key
    const arrayToString = (array) => {
        return array.join(',');
    }

    // Store grid rows arrays into memory
    for (let row = 0; row < grid.length; row++) {
        const rowString = arrayToString(grid[row]);
        rowCache[rowString] = (rowCache[rowString] || 0) + 1;
    }

    // Store grid column arrays into memory
    for (let column = 0; column < grid.length; column++) {
        let columnsArray = [];
        for (let row = 0; row < grid.length; row++) {
            columnsArray.push(grid[row][column]);
        }
        
        // Convert array to string and store in cache
        const columnString = arrayToString(columnsArray);
        columnCache[columnString] = (columnCache[columnString] || 0) + 1;
    }

    // Count the number of occurences
    let counter = 0;
    for (const rowString in rowCache) {
        if (columnCache[rowString]) {
            counter += rowCache[rowString] * columnCache[rowString];
        }
    }
    return counter;
};

// // // testing
// grid = [[3,2,1],[1,7,6],[2,7,7]];
// console.log(equalPairs(grid));

// grid2 = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
// console.log(equalPairs(grid2));