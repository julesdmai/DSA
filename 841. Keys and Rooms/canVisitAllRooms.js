/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const visited = new Array(n).fill(false);
    
    const dfs = (room) => {
        visited[room] = true;
        for (const key of rooms[room]) {
            if (!visited[key]) {
                dfs(key);
            }
        }
    };
    
    // Start DFS from room 0
    dfs(0);
    
    // Check if all rooms have been visited
    for (const v of visited) {
        if (!v) return false;
    }
    return true;
};

// // Testing
// console.log(canVisitAllRooms([[1], [2], [3], []])); // Output: true
// console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // Output: false
