/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// Input: number, number
// Output: array of arrays

var combinationSum3 = function(k, n) {
    const result = [];

    const backtrack = (remainingK, remainingN, start, currentCombination) => {
        if (remainingK === 0 && remainingN === 0) {
            result.push([...currentCombination]);
            return; // Found a summing combination
        }

        for (let i = start; i <= 9; i++) {
            if (i > remainingN) break; // Optimization to stop early

            // These next 3 steps are very crucial
            currentCombination.push(i); // First we add number 'i' to our combinations, we will go down this path
            backtrack(remainingK - 1, remainingN - i, i + 1, currentCombination); // Second, we recursively call the function to go down this path
            currentCombination.pop(); // This step is the backtracking step
            
            // After the recursive call completes, whether it leads to a valid combination or not, we remove the last added number, effectively "undo-ing" the choice we made, allowing us to bcaktrack to the previous state
        }
    };

    backtrack(k, n, 1, []);
    return result;
};

// testing
console.log(combinationSum3(3, 7));