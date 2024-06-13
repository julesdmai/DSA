/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    // Check if score array is empty or k is out of bounds
    if (score.length === 0 || k < 0 || k >= score[0].length) {
        return score;
    }
    // Sort the array based on the kth exam score in descending order
    return score.sort((a, b) => b[k] - a[k]);
};


// // Testing
// console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2))
// console.log(sortTheStudents([[3,4],[5,6]], 0))