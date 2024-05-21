/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n) // spaceO(n)
var equalPairs = function(grid) {
    const cache = {};
    let value = '';

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid.length; column++) {
            value += `${grid[row][column]}`;
        }
        cache[value] = (cache[value] || 0) + 1; // Add to cache
        value = ''; // Reset string
    }

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid.length; column++) {
            value += `${grid[column][row]}`;
        }
        cache[value] = (cache[value] || 0) + 1; // Add to cache
        value = ''; // Reset string
    }

    console.log(cache);

    const values = Object.values(cache);
    let counter = 0;
    values.forEach((element) => {
        if (element > 1) {
            counter += element - 1;
        }
    })

    return counter;
};

// // testing
// grid = [[3,2,1],[1,7,6],[2,7,7]];
// console.log(equalPairs(grid));

grid2 = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
console.log(equalPairs(grid2));