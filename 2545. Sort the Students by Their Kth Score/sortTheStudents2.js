/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
// Strategy: Merge sort according to kth exam score
// O(nlogn) // spaceO(n)
// Input: Array of array of numbers representing students x scores, k = kth exam
// Output: Array of arrays sorted by kth exam score
var sortTheStudents = function(score, k) {
    
    // Helper function to merge two sorted arrays
    const merge = (left, right, k) => {
        let result = []; 
        // Merge the two arrays into result based on the kth score DESCENDING
        while (left.length && right.length) {
            if (left[0][k] >= right[0][k]) result.push(left.shift()); // Take the element from the left
            else result.push(right.shift()); // Take the element from the right
        }
        // Take any leftover remainders, return merged/sorted array
        return result.concat(left, right);
    }

    // Helper function to merge sort // Based on kth score, important for final merge step
    const mergeSort = (score, k) => {
        if (score.length <= 1) return score; // Base case: array with 0 or 1 elements

        const mid = Math.floor(score.length / 2);
        const left = mergeSort(score.slice(0, mid), k); // Recursively call on left half
        const right = mergeSort(score.slice(mid), k); // Recursively call on right half
        return merge(left, right, k); // Merge the two sorted halves

    }

    // Invocation
    return mergeSort(score, k);

};


// Testing
// console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2))
// console.log(sortTheStudents([[3,4],[5,6]], 0))