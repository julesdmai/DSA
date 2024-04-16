/**
 * @param {number[]} cost
 * @return {number}
 */

// Strategy - Binary Tree and doing DFS
// Start at either index 0 or index 1
// Take either 1 step or 2 steps
// If position is out of bounds, then return
// If position reaches last element, then compare totalCost with maxTotalCost


var minCostClimbingStairs = function(cost) {
    let maxTotalCost = Infinity;
    const finalPosition = cost.length;

    const traverseStaircase = (array, startingIndex) => {
        let totalCost = 0;
        totalCost += array[startingIndex];

        if (startingIndex === finalPosition - 1 || startingIndex === finalPosition - 2) return Math.min(totalCost, maxTotalCost);
        if (startingIndex >= finalPosition) return Infinity;

        // Take another step
        return (
            Math.min(traverseStaircase(array, startingIndex + 1), traverseStaircase(array, startingIndex + 2))
        )
    }

    const startingIndex0 = traverseStaircase(cost, 0);
    const startingIndex1 = traverseStaircase(cost, 1);
    
    return Math.min(startingIndex0, startingIndex1);
};

// Testing for minCostClimbingStairs()
const cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));