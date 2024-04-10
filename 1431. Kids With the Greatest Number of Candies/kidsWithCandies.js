// O(n) - Math.max(...candies) is O(n) and forEach is o(n) = 2n reducing to O(n)
 // Input: Array of nums, num
 // Output: Array of bools
 var kidsWithCandies = function(candies, extraCandies) {
    // Check edge cases - empty candies array, extraCandies is negative?

    // Calculate the amtRequired
    const amtRequired = Math.max(...candies) - extraCandies;

    // Construct new array with bools
    const results = [];
    candies.forEach((el) => {
        results.push((el >= amtRequired));
    });

    return results;
};

// Testing for kidsWithCandies()
const candies = [2,3,5,1,3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));