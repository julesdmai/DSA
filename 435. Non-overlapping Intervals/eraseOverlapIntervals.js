/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Input: array of arrays
// Output: number representing the minimum number of sub-arrays that must be removed to have no overlapping subarrays within the array

var eraseOverlapIntervals = function(intervals) {
    // Example
    // [[1, 2], [2, 3], [3, 4], [1, 3]]
    if (intervals.length === 0) return 0;

    // Sort intervals based on their end time
    // [[1, 2], [2, 3], [1, 3], [3, 4]]
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let end = intervals[0][1]; // Initialize with the end time of the first interval.

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping interval found, increment count
            count++;
        } else {
            // No overlap, update end to current interval's end time
            end = intervals[i][1];
        }
    }

    return count;
};

// testing
// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
// console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
// console.log(eraseOverlapIntervals([[1,2],[2,3]]));
