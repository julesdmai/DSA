/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

// Strategy - BFS graph
// O(n) // spaceO(n)
var nearestExit = function(maze, entrance) {
    let minSteps = 0;
    let steps = 0;

    const visited = [];
    const queue = [];

    // Helper function to perform BFS on graph
    const bfs = (maze, entrance, visited, queue, steps) => {
        // Check for exit condition
        if 

        return;
    }
    
    // Travel left
    let left = [entrance[0], entrance[1] - 1];
    // Check for wall and boundaries
    if (maze[left] === '.' && entrance[1] - 1 >= 0) {
        queue.push(left);
    };

    // Travel right
    let right = [entrance[0], entrance[1] + 1];
    if (maze[right] === '.' && entrance[1] + 1 <= maze[0].length) {
        queue.push(right);
    };

    // Travel up
    let up = [entrance[0] + 1, entrance[1]];
    if (maze[up] === '.') {
        queue.push(up);
    }

    // Travel down
    let down = [entrance[0] - 1, entrance[1]];
    if (maze[down] === '.') {
        queue.push(down);
    }

};