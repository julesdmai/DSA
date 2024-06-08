/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

// Strategy - BFS graph
// O(n) // spaceO(n)
var nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const columns = maze[0].length;
    const directions = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0]  // up
    ];
    const queue = [[...entrance, 0]]; // Initialize with entrance [row, column, steps]
    const visited = new Set();
    visited.add(`${entrance[0]}-${entrance[1]}`);

    while (queue.length) {
        const [curRow, curColumn, steps] = queue.shift();

        for (const [dr, dc] of directions) {
            const newRow = curRow + dr;
            const newColumn = curColumn + dc;

            // Check boundaries
            if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
                // Check if the cell is an empty cell and not visited
                if (maze[newRow][newColumn] === '.' && !visited.has(`${newRow}-${newColumn}`)) {
                    // Check exit condition
                    if ((newRow === 0 || newRow === rows - 1 || newColumn === 0 || newColumn === columns - 1) && (newRow !== entrance[0] || newColumn !== entrance[1])) {
                        return steps + 1;
                    }

                    // Record the cell has been visited and add to queue
                    visited.add(`${newRow}-${newColumn}`);
                    queue.push([newRow, newColumn, steps + 1]);
                }
            }
        }
    }

    // Finished BFS and never found cell that fits exit criteria
    return -1;
};
